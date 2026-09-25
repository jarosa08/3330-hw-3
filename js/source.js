$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    // update revenue amount
    $(".revenue-amt").html(`${revenueAmt}`);

    // update customer number
    $("#customer-num").html(`${customerNum}`);

    // update order amount
    $("#orders-amt").html(`${ordersAmt}`);

    // update issuse amount
    $("#issues-amt").html(`${issuesAmt}`);

    // update username
    $("#username").html(`${username}`);

    // update notification amount
    $("#notification-num").html(`${notifAmt}`);

    // update customer table
    let customerTable = $("#customerTableBody");
    customers.forEach( customer => {
        customerTable.append("<tr>");
        customerTable.append(`<td>${customer.name}</td>`);
        customerTable.append(`<td>${customer.email}</td>`);
        let statusLower = customer.status.valueOf().toLowerCase();
        customerTable.append(`<td><span class="status status-${statusLower}">${customer.status}</span></td>`);
        customerTable.append(`<td>${customer.joined}</td>`);
        customerTable.append("</tr>");
    });

    // update sales table
    let salesTable = $("#salesTableBody");
    sales.forEach( sale => {
        salesTable.append("<tr>");
        salesTable.append(`<td>${sale.product}</td>`);
        salesTable.append(`<td>${sale.quantity}</td>`);
        salesTable.append(`<td>${sale.revenue}</td>`);
        salesTable.append("</tr>");
    });

    // update activites list
    let activitesList = $("#activity-list");
    activities.forEach( activity => {
        activitesList.append(`<li>${activity.message}</li>`);
    });

    // update system messages list
    let systemList = $("#system-status-list");
    messages.forEach( message => {
        systemList.append(`<li>${message.messsage}</li>`);
    });

    // update notifications list
    let notificationList = $("#notifications-list");
    notifications.forEach( notification => {
        notificationList.append(`<li>${notification.messsage}</li>`);
    });

    // update tasks list
    let taskList = $("#tasks-list");
    tasks.forEach(task => {
        taskList.append(`<li>${task.messsage}</li>`);
    });

    // convert html buttons to jquery buttons
    $("button").button();

    // convert dashboardtabs into jquery ui tabs
    $("#dashboardTabs").tabs();

    // convert customerdialog into jquery dialog
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();
                if (!name || !email) {
                    alert(
                        "Please enter a name and email."
                    );
                    return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    // convert accordion into jquery accordion
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // add jquery event listener to newcustomnerbutton
    $("#newCustomerButton").on("click", function() {
        $("#customerDialog").dialog("open");
    });

    // convert customerDate into jquery datepicker
    $("#customerDate").datepicker();

    });