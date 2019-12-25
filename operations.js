require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');

const t1 = tf.tensor1d([1,2,3]);
const t2 = tf.tensor1d([1,3,4]);


// Each operation returns a handle to the tensor
// Tensors are immutable
t1.print();

const t3 = t1.add(t2);

t3.data().then(result => {
    console.log("Eager execution");
    console.log(result);
})

t1.sub([1,3,4]).print();

t3.mul(t1).print();

// Don't forget to dispose when done
t1.dispose();
t2.dispose();
t3.dispose();