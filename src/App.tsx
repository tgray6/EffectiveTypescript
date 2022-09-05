import React from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;






class Square {
  constructor(public width: number) {};
};

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  };
};

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.height * shape.width;
  } else {
    return shape.width * shape.width;
  };
};

let square = new Square(5);
let rectangle = new Rectangle(10, 6);

console.log(calculateArea(rectangle));
console.log(calculateArea(square));

rectangle.height = 1.5;

console.log(calculateArea(rectangle));

