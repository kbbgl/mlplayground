require("@tensorflow/tfjs-node");
const tf = require('@tensorflow/tfjs');

// SEQUENTIAL MODEL

// `inputShape` is the size of the input vector

const model = tf.sequential({

    layers: [
        tf.layers.dense({inputShape: [784], units: 16, activation: 'relu'}),
        tf.layers.dense({units: 10, activation:'softmax'})
    ]

});

// Inspecting the layers
/*
    console.log(model.inputLayers);
    console.log(model.layers);
    console.log(model.outputLayers);
*/

// Can add layers after model was already initialized
/*
    model.add(tf.layers.dense({inputShape: [23], units: 12, activation: 'linear'}));
*/


// FUNCTIONAL MODEL

const input = tf.input({shape: [784]});
const dense1 = tf.layers.dense({units: 16, activation: 'relu'}).apply(input);
const dense2 = tf.layers.dense({units: 10, activation: 'softmax'}).apply(dense1);
const modelfunctional = tf.model({inputs: input, outputs: dense2});


/* Inspecting the model

    - name, type of each layer
    - output shape of each layer
    - number of weight parameters in each layer
    - total number of trainable and non-trainable parameters

*/

console.log(model.summary());

