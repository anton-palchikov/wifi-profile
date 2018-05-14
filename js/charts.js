var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        datasets: [{
            label: "Кол-во подключений",
            borderColor: 'rgb(0, 177, 239)',
            fill: false,
            data: [0, 10, 5, 2, 20, 30, 45, 50, 100, 200],
        }]
    },

    // Configuration options go here
    options: {
        legend: [{
            display: false
        }],
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        scales: {
            yAxes: [{
                display: false
            }]
        }
    }
});

var ctx1 = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        datasets: [{
            label: "Кол-во показов",
            borderColor: 'rgb(0, 177, 239)',
            fill: false,
            data: [0, 10, 5, 2, 20, 30, 45, 50, 100, 200],
        }]
    },

    // Configuration options go here
    options: {
        legend: [{
            display: false
        }],
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        scales: {
            yAxes: [{
                display: false
            }]
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: ['#005885', '#00B1EF', '#CCCACD'],
            data: [500000, 300000, 200000],
        }]
    },
    options: {
        cutoutPercentage: 90,
        tooltips: {
            enabled: false
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
});