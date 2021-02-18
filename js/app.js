let timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
];

function randomInRange(min, max) {
    let range = max - min;
    return Math.floor(Math.random() * (range + 1)) + min;
};

function tableHeaderRow() {
    const tableElem = document.getElementById('table');
    const row1 = document.createElement('tr');
    const cellBlank = document.createElement('td');
    cellBlank.textContent = ''
    row1.appendChild(cellBlank);
    tableElem.appendChild(row1);
    for (let i = 0; i < timeSlots.length; i++) {
        const tableHeaderElem = document.createElement('th');
        row1.appendChild(tableHeaderElem);
        tableHeaderElem.textContent = timeSlots[i];
    }
    const cellRowTotal = document.createElement('th');
    cellRowTotal.textContent = 'Daily Location Total'
    row1.appendChild(cellRowTotal)
}

function tableFooterRow() {
    const tableElem = document.getElementById('table');
    const rowFooter = document.createElement('tr');
    rowFooter.setAttribute('id', 'rowFooter');
    const cellTotal = document.createElement('td');
    cellTotal.textContent = 'Totals';
    tableElem.appendChild(rowFooter);
    rowFooter.appendChild(cellTotal);
    let globalTotal = 0;
    let globalArray = [];
    for (let i = 0; i < timeSlots.length; i++) {
        let locationCount = 0;
        for (let j = 0; j < allStands.length; j++) {
            locationCount += allStands[j].cookiesPerHourArray[i][1];
        }
        const cellTotal = document.createElement('td');
        cellTotal.textContent = locationCount;
        rowFooter.appendChild(cellTotal);
        globalTotal += locationCount
    }
    console.log(globalArray);
    const globalTotalCell = document.createElement('td')
    globalTotalCell.textContent = globalTotal
    rowFooter.appendChild(globalTotalCell)
}

let allStands = [];

function CookieStand(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
    this.id = location.toLowerCase();
    this.location = location;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.totalCookies = 0;
    this.cookiesPerHourArray = [];
    allStands.push(this);
}

CookieStand.prototype.generateCustomersPerHour = function() {
    let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    return customersPerHour;
}
CookieStand.prototype.calcCookiesPerHour = function() {
    for (let i = 0; i < timeSlots.length; i++) {
        let customersEachHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
        this.totalCookies += Math.ceil(cookiesEachHour);
        this.cookiesPerHourArray.push([timeSlots[i], Math.ceil(cookiesEachHour)]);
    }
    this.cookiesPerHourArray.push(['total', this.totalCookies])
}
CookieStand.prototype.render = function() {

    const tableElem = document.getElementById('table');
    const row2 = document.createElement('tr');
    tableElem.appendChild(row2);

    const cellOne = document.createElement('td');
    cellOne.textContent = this.id
    row2.appendChild(cellOne);
    
    for (let i = 0; i < timeSlots.length; i++) {
        const cookiesPerHourTableElem = document.createElement('td');
        row2.appendChild(cookiesPerHourTableElem);
        cookiesPerHourTableElem.textContent = this.cookiesPerHourArray[i][1]
    }
    const dailyTotalRow = document.createElement('td')
    row2.appendChild(dailyTotalRow);
    dailyTotalRow.textContent = this.totalCookies;
}

tableHeaderRow();

let standSeattle = new CookieStand('Seattle', 23, 65, 6.3);
standSeattle.generateCustomersPerHour();
standSeattle.calcCookiesPerHour();
standSeattle.render();

let standTokyo = new CookieStand('Tokyo', 3, 24, 1.2);
standTokyo.generateCustomersPerHour();
standTokyo.calcCookiesPerHour();
standTokyo.render();

let standDubai = new CookieStand('Dubai', 11, 38, 3.7);
standDubai.generateCustomersPerHour();
standDubai.calcCookiesPerHour();
standDubai.render();

let standParis = new CookieStand('Paris', 20, 38, 2.8);
standParis.generateCustomersPerHour();
standParis.calcCookiesPerHour();
standParis.render();

let standLima = new CookieStand('Lima', 2, 16, 4.6);
standLima.generateCustomersPerHour();
standLima.calcCookiesPerHour();
standLima.render();

tableFooterRow();

function submitHandler(event) {
    event.preventDefault();
    let newStand = new CookieStand(event.target.storeName.value,
        event.target.minCustomers.value,
        event.target.maxCustomers.value,
        event.target.avgCookies.value
        );
    newStand.generateCustomersPerHour();
    newStand.calcCookiesPerHour();
    newStand.render();
    oldFooter = document.getElementById("rowFooter");
    oldFooter.remove();
    tableFooterRow();
}

const form = document.getElementById('new-store-form');

form.addEventListener('submit', submitHandler)



