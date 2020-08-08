'use strict';

var seattle = {
  minCust: 23,
  maxCust: 65,
  aveOrder: 6.3,
  custPerHour: function getRandomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
  },
  hourNums: [],
  cookiesPerHour: function() {
    for (var i = 0; i < 14; i++) {
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
  cookiesPerHour: function() {
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
  cookiesPerHour: function() {
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
  cookiesPerHour: function() {
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
  cookiesPerHour: function() {
    for (var i = 0; i < 14; i++) {
      var cookiesThisHour = (this.aveOrder * this.custPerHour(9));
      this.hourNums.push(cookiesThisHour);
    }
  }
};

function createArticle() {
  var city = prompt('name of location');
  seattle.cookiesPerHour();
  var main = document.getElementById('main');
  var article = document.createElement('article');
  main.append(article);
  var h2 = document.createElement('h2').textContent = city;
  article.append(h2);
  var ul = document.createElement('ul');
  article.append(ul);
  for (var j = 0; j < seattle.hourNums.length; j++) {
    var li = document.createElement('li').textContent = seattle.hourNums[j];
    var br = document.createElement('br');
    ul.append(li);
    ul.append(br);
  }
}
