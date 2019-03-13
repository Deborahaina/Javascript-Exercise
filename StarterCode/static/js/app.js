// from data.js
var tableData = data;
// Get references to the tbody element, input field and button

var date = d3.select("#datetime")
var select = d3.select("#filter-btn")
var shape = d3.select('#shape')
var comments = d3.select("#comments")
var city = d3.select("#city")
var state = d3.select ("#state")
var country =d3.select ("#country")


// Reference to the table body
var tbody = d3.select("tbody");


tableData.forEach((data_entry) => {
    console.log(data_entry);
    var row = tbody.append("tr");
    Object.entries(data_entry).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
 })

})
// Add an event listener to the filterButtons, call function Click when whenver a new search is made.

select.on("click", function() {

    // clears data
    d3.select("tbody").html("");

    // keeps page from refreshing
    d3.event.preventDefault();

    // filter data to only dates on or after input date
    var inputValue = date.property("value")
    var inputShape = shape.property("value")
    var inputCity= city.property("value")
    var inputState= state.property("value")

    if (inputShape === "") {

        var filteredData = tableData.filter(table_data => table_data.datetime >= inputValue );
        // re-create table
        var tbody = d3.select("tbody");
        filteredData.forEach((data_entry1) => {
            //append a table row to tbody
            var row = tbody.append("tr");
            Object.entries(data_entry1).forEach(([key, value]) => {
                //append table data to each cell of table row
                var cell = row.append("td");
                cell.text(value);
            })
        })    

}
    

    else {
        var filteredData = tableData.filter(filtered => filtered.datetime >= inputValue &&
            filtered.shape === inputShape);
        // re-create table
        var tbody = d3.select("tbody");
        filteredData.forEach((data_entry1) => {
            var row = tbody.append("tr");
            Object.entries(data_entry1).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        }
        
    )}


})


    
