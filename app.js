var appendHeader = document.getElementById('append-header');
var appendRows = document.getElementById('append-rows');

var storesArray = [];

function Store(min, max, avgSalesPerCust, locName) {
  this.min = min;
  this.max = max;
  this.avgSalesPerCust = avgSalesPerCust;
  this.locName = locName;
  this.hourlySales = [];
  this.dailySales = 0;

  this.calcHourlyCust = function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };

  this.calcHourlySales = function(){
    for(var i = 0; i < 15; i++) {
      this.hourlySales.push(Math.floor(this.calcHourlyCust() * this.avgSalesPerCust));
      this.dailySales += this.hourlySales[i];
    }
  };

  this.postDailySales = function() {
    this.calcHourlySales();
    var tr = document.createElement('tr');
    var thLocation = document.createElement('th');
    thLocation.textContent = this.locName;
    tr.appendChild(thLocation);
    for(var i = 0; i < this.hourlySales.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.hourlySales[i];
      tr.appendChild(td);
    }
    appendRows.appendChild(tr);
    var totalTd = document.createElement('td');
    totalTd.textContent = this.dailySales;
    tr.appendChild(totalTd);
  };
  storesArray.push(this);
}

var pikePlace = new Store(17, 88, 5.2, 'Pike Place Market');
var seaTac = new Store(6, 24, 1.2, 'SeaTac Airport');
var southcenter = new Store(11, 38, 1.9, 'Southcenter');
var bellSquare = new Store(20, 48, 3.3, 'Bellevue Square');
var alki = new Store(3, 24, 2.6, 'Alki Beach');

var trHeader = document.createElement('tr');
var blankHeader = document.createElement('th');
trHeader.appendChild(blankHeader);
for (var header = 0; header < 15; header++){
  var headerEl = document.createElement('th');
  if(header < 6){
    headerEl.textContent = (header + 6) + 'am';
  } else if(header === 6){
    headerEl.textContent = (header + 6) + 'pm';
  } else {
    headerEl.textContent = (header - 6) + 'pm';
  }
  trHeader.appendChild(headerEl);
}
var totalHeader = document.createElement('th');
totalHeader.textContent = 'Total';
trHeader.appendChild(totalHeader);
appendHeader.appendChild(trHeader);

for (var i = 0; i < storesArray.length; i++){
  storesArray[i].postDailySales();
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
