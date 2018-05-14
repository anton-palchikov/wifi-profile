var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        datasets: [{
                label: "Клики",
                borderColor: '#00B1EF',
                fill: false,
                data: [100, 20, 50, 90, 20, 30, 45, 50, 100, 10],
                pointBackgroundColor: '#00B1EF',
                showLine: false,
                pointRadius: 7
            },
            {
                label: "Нет кликов",
                borderColor: '#D0021B',
                fill: false,
                data: [0, 10, 5, 2, 20, 30, 45, 50, 100, 10],
                pointBackgroundColor: '#D0021B',
                showLine: false,
                pointRadius: 7
            },
        ]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
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
                bottom: 40
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