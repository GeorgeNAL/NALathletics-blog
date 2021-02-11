

library(shiny)
library(tidyverse)

salaries <- readRDS("data/salaries.rds")

number_of_coaches <- nrow(salaries)
number_of_schools <- length(unique(salaries$School))
salaries$Salary <- as.numeric(salaries$Salary)
median_salary <- scales::comma(round(median(salaries$Salary, na.rm=TRUE)))

ui <- fluidPage(

  tags$head(includeCSS("www/Salaries-data-layout.css"),
      tags$script(src="iframeResizer.contentWindow.min.js")),

  hr(),

  fluidRow(
    column(4, tags$div(p(span(number_of_schools, class="big-numbers"), span("Colleges", class="text-with-big-numbers")))),

    column(4, tags$div(p(span(number_of_coaches, class="big-numbers"), span("Coaches", class="text-with-big-numbers")))),

    column(4, tags$div(p(span(paste0("$",median_salary), class="big-numbers"), span("Median salary", class="text-with-big-numbers")))),
  ),

  fluidRow(
    column(1),
    column(10, h6("Some states publish public university employee salaries under their transparency or \"sunshine\" laws. Our database is the most recent salary information publicly
    available for college track & field coaches in those states. We have removed the names of the individual coaches, and have made the database searchable by job title,
       competitive level (e.g., NCAA Division I-FBS, NCAA Division III, NAIA), state and event groups coached.")),
    column(1)
  ),

  fluidRow(
    column(1),
    column(10, h4("Key: J = Jumps (horizontal and vertical), T = Throws, P = Pole vault, D = Distance, X = Cross-country, M = Multis, S = Sprints, H = Hurdles, R = Relays. All head coaches or
       directors are listed as \"TF/XC.\"")),
    column(1)
  ),

  fluidRow(
  #  column(3, selectInput("Title", "Title / Position", c("All", unique(salaries$Title)), selected = "Assistant coach")),

    column(4, selectInput("Affiliation", "Competitive level", c("All", unique(salaries$Institutional_Affiliation)))),

    column(4, selectInput("State", "State", unique(salaries$State))),

    column(4, selectInput("Events", "Event groups coached", c("TF/XC (Head coach / Director)" = "TFXC"), "Jumps" = "J", "Throws" = "T", "Pole Vault" = "P", "Sprint/Hurdle/Relay" = "S|H|R", "Distance/XC" = "D|X",  selected = "Jumps"))
  ),

  dataTableOutput("salaries_table")

)

server <- function (input, output) {

filtered_table <- reactive ({
  salaries %>%
  #  filter(if (input$Title != "All") (Title == input$Title) else TRUE) %>%
    filter(if (input$Affiliation != "All") (Affiliation == input$Affiliation) else TRUE) %>%
    filter(State %in% input$State) %>%
    filter(str_detect(Sport, as.character(input$Events))) %>%
    select(-Affiliation, -Broad_affiliation) %>%
    rename(c(`Event groups` = Sport, `Competitive Level` = Institutional_Affiliation, `M/W team coach` = `M/W/MW`))

})

output$salaries_table <- renderDataTable ( filtered_table(),  options = list(dom = "t"))
}

shinyApp(ui, server)


