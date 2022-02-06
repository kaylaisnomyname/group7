function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


 /*test 



*/



/*-----------------RAW TABLE */
/*var mydata = JSON.parse(data);*/

const tableData = data; 

  // get table references

var tbody = d3.select("tbody");


function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filters={};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement=d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue=changedElement.property("value")
    console.log(elementValue)
    // 4c. Save the id of the filter that was changed as a variable.
    let filterID=changedElement.attr("id")
    console.log(filterID)
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue){
      filters[filterID]=elementValue;
    }
    else{

      delete filters[filterID];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (var key in filters){
        filteredData = filteredData.filter(row => row[key] === filters[key]);
    
    }
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
d3.select("#Date").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);


// setting image tab

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 


// Setting Google chart
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);


function drawChart1() 
{
  /*
  var jsonData1 = $.ajax({
    url: "static/js/data_machine.json",
    dataType: "json",
    async: false
    }).responseText;
*/

//var tabledata = JSON.parse(fs.readFileSync("static/js/data_machine.json"));
//var json = require('./data_machine.json')
//var tabledata=JSON.parse(json);

var tabledata=JSON.parse('[{"Model":"Linear Regression","R2":0.76,"MAE":433.93,"MSE":284447.25,"Model_Score":0.75},{"Model":"Random Forest","R2":0.96,"MAE":160.38,"MSE":42654.64,"Model_Score":0.78}]')

 var dataArray = [['Model', 'R2'],];
 for (var i = 0; i < tabledata.length; i++) 
 {
  var row = [tabledata[i].Model, tabledata[i].R2];
  dataArray.push(row);
    }

// Create our data table out of JSON data loaded from server.
var options = {
  title: 'R2 Between Model',
  width:'500',
   height: '350',
   vAxis: {minValue: 0}

};

var data = new google.visualization.arrayToDataTable(dataArray);

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));
chart.draw(data, options);

}

function drawChart2()
{
  var tabledata=JSON.parse('[{"Model":"Linear Regression","R2":0.76,"MAE":433.93,"MSE":284447.25,"Model_Score":0.75},{"Model":"Random Forest","R2":0.96,"MAE":160.38,"MSE":42654.64,"Model_Score":0.78}]')

  var dataArray = [['Model', 'MAE'],];
  for (var i = 0; i < tabledata.length; i++) 
  {
   var row = [tabledata[i].Model, tabledata[i].MAE];
   dataArray.push(row);
     }
 
 // Create our data table out of JSON data loaded from server.
 
 var data = new google.visualization.arrayToDataTable(dataArray);
 var options = {
  title: 'MAE Between Model',
  width:'500',
   height: '350',
   vAxis: {minValue: 0}

};




 // Instantiate and draw our chart, passing in some options.
 var chart = new google.visualization.ColumnChart(document.getElementById('barchart2'));
 chart.draw(data,options);
}




function drawChart3()
{
  var tabledata=JSON.parse('[{"Model":"Linear Regression","R2":0.76,"MAE":433.93,"MSE":284447.25,"Model_Score":0.75},{"Model":"Random Forest","R2":0.96,"MAE":160.38,"MSE":42654.64,"Model_Score":0.78}]')

  var dataArray = [['Model', 'Model_Score'],];
  for (var i = 0; i < tabledata.length; i++) 
  {
   var row = [tabledata[i].Model, tabledata[i].Model_Score];
   dataArray.push(row);
     }
 
 // Create our data table out of JSON data loaded from server.
 
 var data = new google.visualization.arrayToDataTable(dataArray);
 var options = {
  title: 'Model Score Between Model',
  width:'500',
   height: '350',
   vAxis: {minValue: 0}

};

 // Instantiate and draw our chart, passing in some options.
 var chart = new google.visualization.ColumnChart(document.getElementById('barchart3'));
 chart.draw(data,options);
}


function drawChart4()
{
  var tabledata=JSON.parse('[{"Model":"Linear Regression","R2":0.76,"MAE":433.93,"MSE":284447.25,"Model_Score":0.75},{"Model":"Random Forest","R2":0.96,"MAE":160.38,"MSE":42654.64,"Model_Score":0.78}]')

  var dataArray = [['Model', 'MSE'],];
  for (var i = 0; i < tabledata.length; i++) 
  {
   var row = [tabledata[i].Model, tabledata[i].MSE];
   dataArray.push(row);
     }
 
 // Create our data table out of JSON data loaded from server.
 
 var data = new google.visualization.arrayToDataTable(dataArray);
 var options = {
  title: 'MSE Between Model',
  width:'500',
   height: '350',
   vAxis: {minValue: 0}

};

 // Instantiate and draw our chart, passing in some options.
 var chart = new google.visualization.ColumnChart(document.getElementById('barchart4'));
 chart.draw(data,options);
}




