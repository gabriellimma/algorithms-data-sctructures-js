// A = π r²
const circleArea = r => 3.14 * (r ** 2);

const squareArea = s => s * s;

console.log(circleArea(15));

module.exports = {
    circleArea, squareArea
}