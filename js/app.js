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
    const rowFooter = document.createElement('tr')
    const cellTotal = document.createElement('td')
    cellTotal.textContent = 'Totals';
    tableElem.appendChild(rowFooter);
    rowFooter.appendChild(cellTotal);
    let globalTotal = 0
    for (let i = 0; i < timeSlots.length; i++) {
        let locationTotal = 0
        while (CookieStand.id = true) {
            locationTotal += 
        }
        // standSeattle.cookiesPerHourArray[i][1] +
        // standTokyo.cookiesPerHourArray[i][1] + standDubai.cookiesPerHourArray[i][1] +
        // standParis.cookiesPerHourArray[i][1] + standLima.cookiesPerHourArray[i][1]
        // console.log(locationTotal);
        const cellTotal = document.createElement('td');
        cellTotal.textContent = locationTotal;
        rowFooter.appendChild(cellTotal);
        globalTotal += locationTotal
    }
    const globalTotalCell = document.createElement('td')
    globalTotalCell.textContent = globalTotal
    rowFooter.appendChild(globalTotalCell)
}

function CookieStand(id, location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale, totalCookies, cookiesPerHourArray =[]) {
    this.id = id;
    this.location = location;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.totalCookies = totalCookies
    this.cookiesPerHourArray = cookiesPerHourArray;
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

    const article = document.createElement('article');
    const profileContainer = document.getElementById(this.id);
    profileContainer.appendChild(article);

    const pElem = document.createElement('p');
    profileContainer.appendChild(pElem);

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

let standSeattle = new CookieStand('seattle', 'Seattle', 23, 65, 6.3, 0);
standSeattle.generateCustomersPerHour();
standSeattle.calcCookiesPerHour();
standSeattle.render();

let standTokyo = new CookieStand('tokyo', 'Tokyo', 3, 24, 1.2, 0);
standTokyo.generateCustomersPerHour();
standTokyo.calcCookiesPerHour();
standTokyo.render();

let standDubai = new CookieStand('dubai', 'Dubai', 11, 38, 3.7, 0);
standDubai.generateCustomersPerHour();
standDubai.calcCookiesPerHour();
standDubai.render();

let standParis = new CookieStand('paris', 'Paris', 20, 38, 2.8, 0)
standParis.generateCustomersPerHour();
standParis.calcCookiesPerHour();
standParis.render();

let standLima = new CookieStand('lima', 'Lima', 2, 16, 4.6, 0)
standLima.generateCustomersPerHour();
standLima.calcCookiesPerHour();
standLima.render();

tableFooterRow();

console.log(standSeattle);
console.log(standTokyo);
console.log(standDubai);
console.log(standParis);
console.log(standLima);
