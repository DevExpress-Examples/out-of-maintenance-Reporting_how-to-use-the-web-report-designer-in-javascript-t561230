"use strict"

const host = 'http://localhost:54111/',
    reportUrl = "Products",
    designerOptions = {
        reportUrl,
        requestOptions: {
            host,
            getDesignerModelAction: "/ReportDesigner/GetReportDesignerModel"
        }
    }

ko.applyBindings({ designerOptions });