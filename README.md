# Installing TensorFlow.js

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script >
```

OR

```bash
yarn add @tensorflow/tfjs

npm install @tensorflow/tfjs
```


## Low Level API


### Tensors

Fundamental data structures in tf. They are vectors/matrices. 
A tensor is the metadata of a retained data. 
A tensor only keeps the pointer to the underlying data array so that we can isolate the manipulation of the tensor's shape and the transformation of the actual data array. 



A tensor contains:

* `rank` - dimensions of the tensor.
* `shape` - shape of each dimension.
* `dtype` - data type of the tensor.
The data types that are available in TensorFlow.js are `float32`, `int32`, `bool`, `complex64`, and `string`.

Full list of APIs:
https://js.tensorflow.org/api/latest/

### Operations

Operations are performed on tensors in order to manipulate them. 

`tensor1.add(tensor2)`
`sub`
`mul`
etc.


###  Memory Management

Tensors with a WebGL backend require memory to be allocated in the GPU which doesn't have a GC mechanism so we need to explicitely manage memory. NodeJS does have a GC. 
We need to ensure disposing the tensor.


## Layers API
High-level API

`Keras`-like used to create models in an intrinsic way.

2 ways to create models using the Layers API:

- **Sequential model**.
- **Functional model**.

#### Sequential model 

Piles up layers on top of each other.

![](https://miro.medium.com/max/1800/1*WP0sqq0uyq_bCGZJQTAb2g.png)

So if we wanted to predict 10 categories out of a vector of 784 elements:

```
[1,5,3,5,2.....,1] VECTOR LENGTH 784
        |
      DENSE         LAYER
        |
      DENSE         LAYER
        |
[0,1,3,4,5,6,3,1,3] VECTOR LENGTH 10

```




### Notes

Run:
```
export TF_CPP_MIN_LOG_LEVEL=2
```

To get rid of warning:
> Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2 FMA