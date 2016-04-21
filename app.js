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

function handleNewStore(event){
  event.preventDefault();

  var locationValue = event.target.location.value;
  var minValue = parseInt(event.target.min.value);
  var maxValue = parseInt(event.target.max.value);
  var avgValue = parseFloat(event.target.avg.value);

  if(!locationValue || !minValue || !maxValue || !avgValue){
    alert('Please fill out all fields');
  } else if(maxValue < minValue){
    alert('The maximum customers must be greater than the minimum.');
  } else {
    var newStore = new Store(minValue, maxValue, avgValue, locationValue);
    newStore.postDailySales();

    event.target.location.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;
  }
}

var pikePlace = new Store(17, 88, 5.2, 'Pike Place Market');
var seaTac = new Store(6, 24, 1.2, 'SeaTac Airport');
var southcenter = new Store(11, 38, 1.9, 'Southcenter');
var bellSquare = new Store(20, 48, 3.3, 'Bellevue Square');
var alki = new Store(3, 24, 2.6, 'Alki Beach');

var trHeader = document.createElement('tr');
var locationHeader = document.createElement('th');
locationHeader.textContent = 'Store Location';
trHeader.appendChild(locationHeader);
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

var form = document.getElementById('form');
form.addEventListener('submit', handleNewStore);
