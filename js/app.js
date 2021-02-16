function randomInRange(min, max) {
    let range = max - min;
    return Math.floor(Math.random() * (range +1)) + min;
};

let seattle = {
    id: 'seattle',
    location: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    totalCookies: 0,
    liArray: [],
    generateCustomersPerHour: function() {
        let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
        return customersPerHour;
    },
    calcCookiesPerHour: function() {
        let customersEachHour = this.generateCustomersPerHour();
        let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
        return Math.ceil(cookiesEachHour);
    },
    render: function() {
        let ulElem = document.getElementById(this.id);
        for (let i = 0; i < timeSlots.length; i++) {
            let cookieNumber = this.calcCookiesPerHour()
            let liElem = document.createElement('li');
            liElem.textContent = timeSlots[i] + ' : ' + cookieNumber + ' cookies';
            ulElem.appendChild(liElem);
            this.liArray.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.liArray.length; i++) {
            let target = this.liArray[i]
            let number = target[1]
            this.totalCookies += number
        }
        this.liArray.push(['total', this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem);
        console.log(this.liArray)
        console.log(this.totalCookies)
    },
};

let tokyo = {
    location: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
};

let dubai = {
    location: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
};

let paris = {
    location: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 2.3,
};

let lima = {
    location: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale: 4.6,
};

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

seattle.render()