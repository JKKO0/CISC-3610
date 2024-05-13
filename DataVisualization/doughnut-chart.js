
// Dataset
const dataset2 = {
    labels: ['Apple', 'Orange', 'Banana', 'Kiwi', 'Blueberry'],
    data: [30, 20, 25, 15, 10],
};

// Doughnut Chart
new Chart(document.getElementById('doughnut-chart'), {
    type: 'doughnut',
    data: {
        labels: dataset2.labels,
        datasets: [{
            label: 'Fruit Sales',
            data: dataset2.data,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Fruit Sales by by Jasur Khalilov'
        }
    }
});
