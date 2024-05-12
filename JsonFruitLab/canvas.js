let fruits = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 15, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 10, color: "purple"}
];

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Set the dimensions and spacing for the bars
let barHeight = 30;
let barMargin = 10;
let startX = 20;
let startY = 20;

fruits.forEach((fruit, index) => { // Iterate over each fruit object in the fruits array
    let barWidth = fruit.quantity * 10;
    ctx.fillStyle = fruit.color;
    ctx.fillRect(startX, startY + (barHeight + barMargin) * index, barWidth, barHeight);

    // Add quantity on top
    ctx.fillStyle = 'black';
    ctx.fillText(fruit.quantity, startX + 2 , startY + (barHeight + barMargin) * index + 15);

    // Add fruit name below the quantity
    ctx.fillText(fruit.name, startX + 2, startY + (barHeight + barMargin) * index + 25);
});
