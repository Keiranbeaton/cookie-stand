var salesProjectionsPikePlace = document.getElementById('salesProjectionsPikePlace');
var salesProjectionsSeaTac = document.getElementById('salesProjectionsSeaTac');
var salesProjectionsSouthCenter = document.getElementById('salesProjectionsSouthCenter');
var salesProjectionsBellSquare = document.getElementById('salesProjectionsBellSquare');
var salesProjectionsAlki = document.getElementById('salesProjectionsAlki');

var pikePlace = {
  minCust: 17,
  maxCust: 88,
  avgSalesPerCust: 5.2,
  locName: 'Pike Place Market',
  tagLink: salesProjectionsPikePlace
};

var seaTac = {
  minCust: 6,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  locName: 'SeaTac Airport',
  tagLink: salesProjectionsSeaTac
}

var southcenter = {
  minCust: 11,
  maxCust: 38,
  avgSalesPerCust: 1.9,
  locName: 'Southcenter',
  tagLink: salesProjectionsSouthCenter
}

var bellSquare = {
  minCust: 20,
  maxCust: 48,
  avgSalesPerCust: 3.3,
  locName: 'Bellevue Square',
  tagLink: salesProjectionsBellSquare
}

var alki = {
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 2.6,
  locName: 'Alki Beach',
  tagLink: salesProjectionsAlki
}

function calcHourlyCust(object) {
  return Math.floor(Math.random() * (object.maxCust-object.minCust)) + object.minCust;
}

function calcHourlySales(object) {
  return Math.floor(calcHourlyCust(object)) * Math.floor(object.avgSalesPerCust);
}

function calcDailyTotal(object) {
  var salesByHour = [0];
  var dailyTotal = 0;
  for (i=0; i<15; i++) {
    salesByHour[i] = calcHourlySales(object);
    dailyTotal += salesByHour[i];
    if (i < 6) {
    var newLi = document.createElement('li');
    newLi.value = salesByHour[i];
    newLi.textContent = (i+6) + 'am: ' + salesByHour[i] + ' cookies';
    (object.tagLink).appendChild(newLi);
  } else if (i > 6) {
    var newLi = document.createElement('li');
    newLi.value = salesByHour[i];
    newLi.textContent = (i-6)+ 'pm: ' + salesByHour[i] + ' cookies';
    (object.tagLink).appendChild(newLi);
    } else {
    var newLi = document.createElement('li');
    newLi.value = salesByHour[i];
    newLi.textContent = (i+6) + 'pm: ' + salesByHour[i] + ' cookies';
    (object.tagLink).appendChild(newLi);
    }
  }
  var newLi = document.createElement('li');
  newLi.value = dailyTotal;
  newLi.textContent = 'Total: ' + dailyTotal + ' cookies';
  (object.tagLink).appendChild(newLi);
  return dailyTotal;
}

calcDailyTotal(pikePlace);
calcDailyTotal(seaTac);
calcDailyTotal(southcenter);
calcDailyTotal(bellSquare);
calcDailyTotal(alki);
