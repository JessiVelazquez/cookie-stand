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
    let ulElem = document.getElementById(this.id);
    for (let i = 0; i < timeSlots.length; i++) {
        let liElem = document.createElement('li');
        liElem.textContent = this.cookiesPerHourArray[i][0] + ' : ' + this.cookiesPerHourArray[i][1] + ' cookies';
        ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem);
    console.log(this.cookiesPerHourArray)
    console.log(this.totalCookies)
}

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

console.log(standSeattle);
console.log(standTokyo);
console.log(standDubai);
console.log(standParis);
console.log(standLima);