var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        datasets: [{
                label: "Кол-во подключений",
                borderColor: '#7ED321',
                fill: false,
                data: [0, 10, 5, 2, 20, 30, 45, 50, 100, 10],
                pointBackgroundColor: '#7ED321',
            },
            {
                label: "Другой график",
                borderColor: '#00B1EF',
                fill: false,
                data: [100, 20, 50, 90, 20, 30, 45, 50, 100, 10],
                pointBackgroundColor: '#00B1EF'
            },
            {
                label: "Другой график2",
                borderColor: '#005885',
                fill: false,
                data: [50, 30, 80, 100, 35, 5, 60, 10, 100, 70],
                pointBackgroundColor: '#005885'
            }
        ]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                usePointStyle: true
            }
        },
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

// chart.defaults.global.legend.labels.generateLabels({
//     fillStyle: "red",
// })