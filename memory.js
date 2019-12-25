require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');

console.log("Before tensor creation:");
console.log(tf.memory());

const tensor1d = tf.tensor1d([1,2,3]);

console.log("After tensor creation:");
console.log(tf.memory());

tensor1d.dispose();

console.log("After tensor dispose:");
console.log(tf.memory());


// We can use the `tidy` method to dispose all tensors within scope

const tensor1 = tf.tensor1d([1,2,3]);

console.log("Before tidy:");
console.log(tf.memory());

const tensor2 = tf.tidy(() => {
    console.log("Inside tidy:");

    const result = tensor1.log().neg().round();
    console.log(tf.memory());

    return result;
})

console.log("After tidy:");
console.log(tf.memory());
console.log(tensor2);

tensor1.dispose();
tensor2.dispose();