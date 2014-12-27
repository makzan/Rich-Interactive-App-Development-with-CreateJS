this.app ?= {}

this.app.renderList()

chart1 = new app.Chart("chart1-canvas")
chart2 = new app.Chart("chart2-canvas")

this.app.handleListChange(chart1, chart2)
this.app.handleInfoPanel()