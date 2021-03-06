  'use strict' //puts more sctrict rules over js

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//arrys of coffee shops
var coffeArray = [
  ['Pike Place', 14, 55, 1.2, 3.7],
  ['Capitol Hill', 32, 48, 3.2, 0.4],
  ['Seattle Library', 49, 75, 2.6, 0.2],
  ['South Lake Union', 35, 88, 1.3, 3.7],
  ['Sea-Tac Airport', 68, 124, 1.1, 2.7],
  ['Website Sales', 3, 6, 0, 6.7]
];

//Pike Market kiosk. Use a function constructor to generate all kiosk objects
function Kiosk (name, minCust, maxCust, avgCups, avgPounds) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.avgPounds = avgPounds;
  this.noCustomers = [];

  this.getNoCustomers = function() {
    for (var i = 0; i < hours.length; i++) {
      this.noCustomers.push((Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust)));
    }
  };

  this.getNoCups = function(customersParameter) {
    return this.avgCups * customersParameter;
  };

  this.getAvgPounds = function(customersParameter) {
    return this.avgPounds * customersParameter;
  };

  this.getAvgSales = function(customersParameter) {
    return (customersParameter *(this.avgCups / 20 + this.avgPounds));
  }

}

function render() {

  //create table
    var sectEl = document.getElementById('table-location');
    var tblEl = document.createElement('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);

//table header - display hours
  for(var i = 0; i < hours.length; i++) {
      var thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
}
//append header table to table and html section
tblEl.appendChild(trEl);
sectEl.appendChild(tblEl);

//create row headers for each coffee shop.
  for(var i = 0; i < coffeArray.length; i++) {
      var trEl = document.createElement('tr');
      var thEl = document.createElement('th');
      thEl.textContent = coffeArray[i][0];
      trEl.appendChild(thEl);
      tblEl.appendChild(trEl);
      sectEl.appendChild(tblEl);

//create new objects for each coffee shop eg: pikePlace = new Kiosk('Pike', 14, 55, 1.2, 3.7);
      var objKiosk = new Kiosk(coffeArray[i][0],coffeArray[i][1],coffeArray[i][2], coffeArray[i][3], coffeArray[i][4]);
      objKiosk.getNoCustomers();

//create td for hourly sales
      for(var j = 0; j < hours.length; j++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = objKiosk.getAvgSales(objKiosk.noCustomers[j]).toFixed(1);
        trEl.appendChild(tdEl);
        tblEl.appendChild(trEl);
        sectEl.appendChild(tblEl);
      }
  }

}

render();


/*
var pikePlace = new Kiosk('Pike', 14, 55, 1.2, 3.7);

var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);

var publicLibrary = new Kiosk('Seattle Library', 49, 75, 2.6, 0.2);

var southLake = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);

var airport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);

var website = new Kiosk('Website Sales', 3, 6, 0, 6.7);
*/
