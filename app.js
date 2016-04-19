var appendRows = document.getElementById('append-rows');

function calcHourlyCust(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function Store(min, max, avgSalesPerCust, locName) {
  this.min = min;
  this.max = max;
  this.avgSalesPerCust = avgSalesPerCust;
  this.locName = locName;
  this.hourlySales = [];
  this.dailySales = 0;
  for(var i = 0; i < 15; i++) {
    this.hourlySales.push(calcHourlyCust(min, max) * avgSalesPerCust);
  }
  for(var j = 0; j <this.hourlySales.length; j++) {
      this.dailySales += this.hourlySales[j];
  }
}

function postDailySales(store) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = store.locName;
  for(var i = 0; i < store.hourlySales.length; i++) {
    var td = document.createElement('td')
    if(i < 6) {
      td.textContent = (i+6) +store.hourlySales[i];
      tr.appendChild(td);
    } else if (i > 6) {
      td.textContent = store.hourlySales[i];
      tr.appendChild(td);
    } else {
      td.textContent = store.hourlySales[i];
      tr.appendChild(td);
    }
  }
  appendRows.appendChild(tr);
}
// function calcHourlySales(object) {
//   return Math.floor(calcHourlyCust(object)) * Math.floor(object.avgSalesPerCust);
// }
//
// function calcDailyTotal(object) {
//   var salesByHour = [0];
//   var dailyTotal = 0;
//   for (i=0; i<15; i++) {
//     salesByHour[i] = calcHourlySales(object);
//     dailyTotal += salesByHour[i];
//     if (i < 6) {
//       var newLi = document.createElement('li');
//       newLi.value = salesByHour[i];
//       newLi.textContent = (i+6) + 'am: ' + salesByHour[i] + ' cookies';
//       (object.tagLink).appendChild(newLi);
//     } else if (i > 6) {
//       var newLi = document.createElement('li');
//       newLi.value = salesByHour[i];
//       newLi.textContent = (i-6)+ 'pm: ' + salesByHour[i] + ' cookies';
//       (object.tagLink).appendChild(newLi);
//     } else {
//       var newLi = document.createElement('li');
//       newLi.value = salesByHour[i];
//       newLi.textContent = (i+6) + 'pm: ' + salesByHour[i] + ' cookies';
//       (object.tagLink).appendChild(newLi);
//     }
//   }
//   var newLi = document.createElement('li');
//   newLi.value = dailyTotal;
//   newLi.textContent = 'Total: ' + dailyTotal + ' cookies';
//   (object.tagLink).appendChild(newLi);
//   return dailyTotal;
// }
// var pikePlace = {
//   minCust: 17,
//   maxCust: 88,
//   avgSalesPerCust: 5.2,
//   locName: 'Pike Place Market',
//   tagLink: salesProjectionsPikePlace
// };
//
// var seaTac = {
//   minCust: 6,
//   maxCust: 24,
//   avgSalesPerCust: 1.2,
//   locName: 'SeaTac Airport',
//   tagLink: salesProjectionsSeaTac
// }
//
// var southcenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgSalesPerCust: 1.9,
//   locName: 'Southcenter',
//   tagLink: salesProjectionsSouthCenter
// }
//
// var bellSquare = {
//   minCust: 20,
//   maxCust: 48,
//   avgSalesPerCust: 3.3,
//   locName: 'Bellevue Square',
//   tagLink: salesProjectionsBellSquare
// }
//
// var alki = {
//   minCust: 3,
//   maxCust: 24,
//   avgSalesPerCust: 2.6,
//   locName: 'Alki Beach',
//   tagLink: salesProjectionsAlki
// }
//
//
// calcDailyTotal(pikePlace);
// calcDailyTotal(seaTac);
// calcDailyTotal(southcenter);
// calcDailyTotal(bellSquare);
// calcDailyTotal(alki);
