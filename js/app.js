'use strict';

var hoursPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  minCust: 23,
  maxCust: 65,
  aveOrder: 6.3,
  custPerHour: function getRandomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  },
  hourNums: [],
  cookiesPerHour: function () {
    for (var i = 0; i < hoursPerDay.length; i++) {
      var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
      this.hourNums.push(cookiesThisHour);
    }
  }
};

var tokyo = {
  minCust: 3,
  maxCust: 24,
  aveOrder: 1.2,
  custPerHour: function getRandomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  },
  hourNums: [],
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
      this.hourNums.push(cookiesThisHour);
    }
  }
};

var dubai = {
  minCust: 11,
  maxCust: 38,
  aveOrder: 3.7,
  custPerHour: function getRandomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  },
  hourNums: [],
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
      this.hourNums.push(cookiesThisHour);
    }
  }
};

var paris = {
  minCust: 20,
  maxCust: 38,
  aveOrder: 2.3,
  custPerHour: function getRandomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  },
  hourNums: [],
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
      this.hourNums.push(cookiesThisHour);
    }
  }
};

var lima = {
  minCust: 2,
  maxCust: 16,
  aveOrder: 4.6,
  custPerHour: function getRandomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  },
  hourNums: [],
  cookiesPerHour: function () {
    for (var i = 0; i < 14; i++) {
      var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
      this.hourNums.push(cookiesThisHour);
    }
  }
};

function ObjectCreation(min, max, ave) {
  this.minCust = min;
  this.maxCust = max;
  this.aveOrder = ave;
  this.hourNums = [];
}

ObjectCreation.prototype.custPerHour = function (maximum) {
  return Math.floor(Math.random() * Math.floor(maximum));
},
ObjectCreation.prototype.cookiesPerHour = function () {
  for (var i = 0; i < hoursPerDay.length; i++) {
    var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
    this.hourNums.push(cookiesThisHour);
  }
};
var newStore = new ObjectCreation(2, 16, 4.6);
console.log(newStore);

// table creation

var main = document.getElementById('main');
var article = document.createElement('article');
var h2 = document.createElement('h2').textContent = 'Cookies per hour';
var table = document.createElement('table');
var thead = document.createElement('thead');
var th = document.createElement('th');
var tbody = document.createElement('tbody');
// var tfoot = document.createElement('tfoot');
seattle.cookiesPerHour();
main.append(article);
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

// table body

function fillTable() {
  var tr = document.createElement('tr');
  tbody.append(tr);
  th.textContent = 'Seattle';
  tr.append(th);
  for (var j = 0; j < seattle.hourNums.length; j++) {
    console.log(j);
    var td = document.createElement('td');
    td.textContent = seattle.hourNums[j];
    tr.append(td);
  }
  console.log(seattle.hourNums);
}
