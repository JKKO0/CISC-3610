// Dataset
const dataset = {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'C#'],
    data: [30, 25, 20, 15, 0],
};

// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: dataset.labels,
        datasets: [
            {
                label: "Programming Language Preference",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: dataset.data
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Programming Language Preference by Jasur Khalilov'
        }
    }
});
