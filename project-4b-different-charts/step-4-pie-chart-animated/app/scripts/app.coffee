this.app ?= {}

this.app.renderList()

chart = new app.Chart("chart-canvas")

this.app.handleListChange(chart)
this.app.handleInfoPanel()