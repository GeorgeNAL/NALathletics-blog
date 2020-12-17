

library(shiny)
library(leaflet)
library(tidyverse)
library(tigris)
library(readxl)
library(geojsonio)

salaries <- readRDS("data/salaries.rds")
geo_state_avg <- readRDS("data/geo_state-avg.rds")
dIavg <- readRDS("data/dIavg.rds")
dIIavg <- readRDS("data/dIIavg.rds")
dIIIavg <- readRDS("data/dIIIavg.rds")
otheravg <- readRDS("data/otheravg.rds")

ui <- fluidPage(
  
  tags$head(includeCSS("Salaries-data-layout.css")),
  titlePanel("Public university track & field coaches: Average salaries"),
  actionLink("DI", "NCAA Division I"),
  actionLink("DII", "NCAA Division II"),
  actionLink("DIII", "NCAA Division III"),
  actionLink("Other", "NAIA & NJCAA"),
  leafletOutput("map"),
  
  hr(),
  
  fluidRow(
    column(3, selectInput("Title", "Title / Position", c("All", unique(salaries$Title)), selected = "Assistant coach")),

    column(3, selectInput("Affiliation", "Competitive level", c("All", unique(salaries$Institutional_Affiliation)))),
    
    column(3, selectInput("State", "State", unique(salaries$State))),
  
    column(3, selectInput("Events", "Event groups coached", c("Jumps" = "J", "Throws" = "T", "Pole Vault" = "P", "Sprint/Hurdle/Relay" = "S|H|R", "Distance/XC" = "D|X", "TF/XC (Head coach / Director)" = "TFXC"), selected = "Jumps"))
  ),
  
  dataTableOutput("salaries_table")

)

server <- function (input, output) {
 
 choice <- reactiveValues(data = NULL)

 observeEvent(input$DI,
              {
  choice$dat <- dIavg})
 
 observeEvent(input$DII,
              {
  choice$dat <- dIIavg})
  
 observeEvent(input$DIII,
              {
  choice$dat <- dIIIavg})
 
  observeEvent(input$Other,
              {
  choice$dat <- otheravg})

pal_orig = colorNumeric("inferno", domain=geo_state_avg$mean, na.color = "#b2bbcd")  
popup_mean_orig <- reactive ({ paste0(geo_state_avg$NAME,
                     "<br />High salary: ", geo_state_avg$high,
                     "<br />Average salary: ", geo_state_avg$mean) })

output$map <- renderLeaflet ({
  leaflet(options = leafletOptions(zoomControl = FALSE, minZoom = 4, maxZoom = 4)) %>%
  setView(-96, 37, 4) %>%
  addProviderTiles("MapBox", options = providerTileOptions(accessToken = Sys.getenv("pk.eyJ1IjoiZHNjYWZhdGkiLCJhIjoiY2tpNmY5Y3hzMjNnNTJ5bXNuaWRwd2FpMSJ9.upkMtmu5aPf2D6vvgqhy2w"))) %>%
  addPolygons(
    data = geo_state_avg,
    fillColor = ~pal_orig(geo_state_avg$mean),
    popup=~popup_mean_orig(),
    color = "#040000",
    weight = 1
  ) %>%
   addLegend(pal = pal_orig, values = geo_state_avg$mean)
})

observeEvent (choice$dat, {
  
  pal = colorNumeric("inferno", domain=choice$dat$mean, na.color = "#fefefe")
  popup_mean <- reactive ({paste0(choice$dat$NAME,
                     "<br />Average salary: ", choice$dat$mean) })
  leafletProxy("map") %>%
    clearShapes() %>%
    addPolygons(
      data = choice$dat,
      fillColor = ~pal(choice$dat$mean),
      popup=~popup_mean(), 
      color = "#040000",
      weight = 1
    )
})

filtered_table <- reactive ({
  salaries %>%
    filter(if (input$Title != "All") (Title == input$Title) else TRUE) %>%
    filter(if (input$Affiliation != "All") (Affiliation == input$Affiliation) else TRUE) %>%
    filter(State %in% input$State) %>%
    filter(str_detect(Sport, as.character(input$Events))) %>%
    select(-Affiliation, -Broad_affiliation) %>%
    rename(c(`Event groups` = Sport, `Competitive Level` = Institutional_Affiliation, `M/W team coach` = `M/W/MW`))
  
})
  
output$salaries_table <- renderDataTable ( filtered_table(),  options = list(dom = "t")) 
}

shinyApp(ui, server)


