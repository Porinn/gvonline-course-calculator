const dhomap = document.getElementById("dhomap");
let context = dhomap.getContext("2d");

let beforeX = 0;
let beforeY = 0;
let standardX = 0;
let linePoints = [];
let linePointsLength = 0;

const drawLine = (event) => {
    const x = event.clientX - 6;
    const y = event.clientY - 6;

    if (beforeX !== 0 && beforeY !== 0) {
        context.beginPath();
        context.moveTo(beforeX, beforeY);
        context.lineTo(x, y);
        context.stroke();
    }

    linePoints.push({x: x - standardX, y: y});
    linePointsLength++;
    beforeX = x;
    beforeY = y;
};

const clickButton = (direction) => {
    if (direction === 'west') {
        standardX = standardX + 10;
        beforeX = beforeX + 10;
    } else if (direction === 'east') {
        standardX = standardX - 10;
        beforeX = beforeX - 10;
    }
    let position = standardX + "px";
    dhomap.style.backgroundPositionX = position;
    
    context.clearRect(0, 0, 1200, 900);
    console.log(`array length: ${linePointsLength}`);
    if (linePointsLength >= 2) {
        context.beginPath();
        context.moveTo(linePoints[0].x + standardX, linePoints[0].y);
        for (let i=1; i<linePointsLength; i++) {
            console.log(`linePoints: ${linePoints[i].x}, ${linePoints[i].y}`)
            context.lineTo(linePoints[i].x + standardX, linePoints[i].y);
            if (i >= (linePointsLength - 1)) {
                console.log('stroke');
                context.stroke();
            }
        } 
    }
};