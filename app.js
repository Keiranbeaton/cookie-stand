var salesByHourPikePlace = [0]
var dailyTotalPikePlace = 0;


var pikePlace = {
  minCust: 17,
  maxCust: 88,
  avgSalesPerCust: 5.2,
  locName: 'Pike Place Market',
};

function calcHourlyCust(object) {
  return Math.floor(Math.random() * (object.maxCust-object.minCust)) + object.minCust;
}

function calcHourlySales(object) {
  return Math.round(calcHourlyCust(object)) * object.avgSalesPerCust;
}

var salesProjectionsPikePlace = document.getElementById('salesProjectionsPikePlace');
function calcDailyTotal(pikePlace) {
  for (i=0; i<15; i++) {
    salesByHourPikePlace[i] = calcHourlySales(pikePlace);
    dailyTotalPikePlace += salesByHourPikePlace[i];
    var newLi = document.createElement('li');
    newLi.value = salesByHourPikePlace[i];
    newLi.textContent = salesByHourPikePlace[i];
    salesProjectionsPikePlace.appendChild(newLi);
  }
}
