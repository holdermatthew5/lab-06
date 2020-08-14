'use strict';

var hoursPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

// table creation

var main = document.getElementById('main');
var article = document.createElement('article');
var h2 = document.createElement('h2');
var table = document.createElement('table');
var thead = document.createElement('thead');
var th = document.createElement('th');
var tbody = document.createElement('tbody');
main.append(article);
h2.textContent = 'Cookies per hour';
article.append(h2);
article.append(table);
table.append(thead);
thead.append(th);
for (var i = 0; i <= hoursPerDay.length - 1; i++) {
  th = document.createElement('th');
  th.textContent = hoursPerDay[i];
  thead.append(th);
}
table.append(tbody);

var hourlySumArr = [];
// Creation of object
function ObjectCreation(min, max, ave, city) {
  this.minCust = min;
  this.maxCust = max;
  this.aveOrder = ave;
  this.name = city;
  this.hourNums = [];
  this.cookiesPerHour();
  this.fillTable();
  hourlySumArr.push(this);
}

// random number generator
ObjectCreation.prototype.custPerHour = function (maximum) {
  return Math.floor(Math.random() * Math.floor(maximum));
};

// creates hourly sales
ObjectCreation.prototype.cookiesPerHour = function () {
  for (var i = 0; i < hoursPerDay.length - 1; i++) {
    var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
    this.hourNums.push(Math.round(cookiesThisHour));
  }
};

// fills table with daily sales
ObjectCreation.prototype.fillTable = function () {
  var tr = document.createElement('tr');
  tbody.append(tr);
  var th = document.createElement('th');
  th.textContent = this.name;
  tr.append(th);
  var dailyTotal = 0;
  for (var j = 0; j < this.hourNums.length; j++) {
    var td = document.createElement('td');
    td.textContent = this.hourNums[j];
    tr.append(td);
    dailyTotal += this.hourNums[j];
  }
  this.hourNums.push(dailyTotal);
  td = document.createElement('td');
  td.textContent = dailyTotal;
  tr.append(td);
};



var Seattle = new ObjectCreation(23, 65, 6.3, 'Seattle');
var Tokyo = new ObjectCreation(3, 24, 1.2, 'Tokyo');
var Dubai = new ObjectCreation(11, 38, 3.7, 'Dubai');
var Paris = new ObjectCreation(20, 38, 2.3, 'Paris');
var Lima = new ObjectCreation(2, 16, 4.6, 'Lima');

var tfoot = document.createElement('tfoot');
table.append(tfoot);
function hourlySum() {
  var tr = document.createElement('tr');
  tfoot.append(tr);
  var th = document.createElement('th');
  th.textContent = 'Hourly sum';
  tr.append(th);
  var hourlySubTotal = [];
  var hourlyTotal = 0;
  for (var j = 0; j < hoursPerDay.length; j++) {
    for (var i = 0; i < hourlySumArr.length; i++) {
      hourlyTotal += hourlySumArr[i].hourNums[j];
    }
    hourlySubTotal.push(hourlyTotal);
    var td = document.createElement('td');
    td.textContent = hourlySubTotal[j];
    tr.append(td);
  }
}

// replace footer
function hourlySumReplacement() {
  tfoot.remove();
  var tfooter = document.createElement('tfoot');
  table.append(tfooter);
  var tr = document.createElement('tr');
  tfooter.append(tr);
  var th = document.createElement('th');
  th.textContent = 'Hourly sum';
  tr.append(th);
  var hourlySubTotal = [];
  var hourlyTotal = 0;
  for (var j = 0; j < hoursPerDay.length; j++) {
    for (var i = 0; i < hourlySumArr.length; i++) {
      hourlyTotal += hourlySumArr[i].hourNums[j];
    }
    hourlySubTotal.push(hourlyTotal);
    var td = document.createElement('td');
    td.textContent = hourlySubTotal[j];
    tr.append(td);
  }

}

// delete footer to add last row and call footer again

// }
// uses form to create object
var listener = document.getElementById('submit');
listener.addEventListener('submit', useForm);

function useForm(event) {
  event.preventDefault();
  var nameInput = event.target.city.value;
  var minInput = event.target.mincust.value;
  var maxInput = event.target.maxcust.value;
  var aveInput = event.target.aveorder.value;
  new ObjectCreation(minInput, maxInput, aveInput, nameInput);
  hourlySumReplacement();
}
hourlySum();
