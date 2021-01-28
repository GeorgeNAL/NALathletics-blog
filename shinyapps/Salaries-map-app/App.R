

library(shiny)
library(leaflet)
library(tidyverse)
library(tigris)
library(geojsonio)

geo_state_avg <- readRDS("data/geo_state_avg.rds")
dIavg <- readRDS("data/dIavg.rds")
dIIavg <- readRDS("data/dIIavg.rds")
dIIIavg <- readRDS("data/dIIIavg.rds")
otheravg <- readRDS("data/otheravg.rds")

ui <- fluidPage(

  tags$head(includeCSS("www/Salaries-data-layout.css")),
  titlePanel("Public university track & field coaches: Salaries explorer"),
  actionLink("DI", "NCAA Division I"),
  actionLink("DII", "NCAA Division II"),
  actionLink("DIII", "NCAA Division III"),
  actionLink("Other", "NAIA & NJCAA"),
  leafletOutput("map")

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
}
shinyApp(ui, server)


