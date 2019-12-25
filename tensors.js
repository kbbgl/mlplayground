require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');

// Create 1D tensor
const tensor1d = tf.tensor1d([1,2,3]);
// tensor1d.print(true);

// Create 2D tensor
const tensor2d= tf.tensor2d([1,2, 3, 4], [2,2]);
// tensor2d.print();

/* 
    We can use Synchronious or Asyncronious APIs for fetching.
    `data` method returns a Promise.
    `dataSync` method runs synchroniously

    We should use the Asynchronous API as much as possible since it doesn't unintentionally block application execution (e.g. doesn't freeze the UI)
*/

tensor1d.data(d => {
    console.log(d);
})

console.log(tensor2d.dataSync())


/*
    There's a need to dispose the tensors when done as there's no GC running on WebGL
*/

tensor1d.dispose();
tensor2d.dispose();