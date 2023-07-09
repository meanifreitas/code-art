const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 300, 300],
  animate: true,
  fps: 60
};

const sketch = ({ context, width, height }) => {
  context.fillStyle = 'black';
  context.fillRect(0, 0, width, height);
  
  return ({ context, width, height, frame }) => {


    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(90, 90, 100, 100);

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(120, 120, 100, 100);
  };
};

canvasSketch(sketch, settings);
