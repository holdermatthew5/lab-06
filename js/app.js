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
// var tfoot = document.createElement('tfoot');
main.append(article);
h2.textContent = 'Cookies per hour';
article.append(h2);
article.append(table);
table.append(thead);
thead.append(th);
for (var i = 0; i <= hoursPerDay.length; i++) {
  th = document.createElement('th');
  th.textContent = hoursPerDay[i];
  thead.append(th);
}
table.append(tbody);
// tfoot.textContent = 'sum of hours';
// table.append(tfoot);

// Creation of object

function ObjectCreation(min, max, ave, city) {
  this.minCust = min;
  this.maxCust = max;
  this.aveOrder = ave;
  this.name = city;
  this.hourNums = [];
}

ObjectCreation.prototype.custPerHour = function (maximum) {
  return Math.floor(Math.random() * Math.floor(maximum));
};
ObjectCreation.prototype.cookiesPerHour = function() {
  for (var i = 0; i < hoursPerDay.length - 1; i++) {
    var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
    this.hourNums.push(Math.round(cookiesThisHour));
  }
};
ObjectCreation.prototype.fillTable = function() {
  var tr = document.createElement('tr');
  tbody.append(tr);
  var th = document.createElement('th');
  th.textContent = this.name;
  tr.append(th);
  for (var j = 0; j < this.hourNums.length; j++) {
    var td = document.createElement('td');
    td.textContent = this.hourNums[j];
    tr.append(td);
  }
  td = document.createElement('td');
  for (var k = 0; k < this.hourNums.length; k++) {
    td.textContent += parseInt(this.hourNums[k]);
  }
  tr.append(td);
};
var Seattle = new ObjectCreation(23, 65, 6.3, 'Seattle');
Seattle.cookiesPerHour();
Seattle.fillTable();
var Tokyo = new ObjectCreation(3, 24, 1.2, 'Tokyo');
Tokyo.cookiesPerHour();
Tokyo.fillTable();
var Dubai = new ObjectCreation(11, 38, 3.7, 'Dubai');
Dubai.cookiesPerHour();
Dubai.fillTable();
var Paris = new ObjectCreation(20, 38, 2.3, 'Paris');
Paris.cookiesPerHour();
Paris.fillTable();
var Lima = new ObjectCreation(2, 16, 4.6, 'Lima');
Lima.cookiesPerHour();
Lima.fillTable();

