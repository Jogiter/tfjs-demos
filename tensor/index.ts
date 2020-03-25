import Demo from '../util/demo';
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const demo = new Demo();

demo
  .add(() => {
    // 从一个多维数组创建一个rank-2的张量矩阵
    const a = tf.tensor([
      [1, 2],
      [3, 4]
    ]);
    console.log('shape:', a.shape); // [2, 2]
    a.print();
  })
  .add(() => {
    // 从一个多维数组创建一个rank-2的张量矩阵
    const a1 = tf.tensor([
      [1, 2, 3],
      [3, 4, 5]
    ]);
    console.log('shape:', a1.shape); // [2, 3]
    console.log('rank:', a1.rank); // 2
    console.log('dtype:', a1.dtype); // float32
    a1.print();
  })
  .add(() => {
    // 或者您可以用一个一维数组并指定特定的形状来创建一个张量
    const shape = [2, 2];
    const b = tf.tensor([1, 2, 3, 4], shape);
    console.log('shape:', b.shape); // [2, 2]
    b.print(); // [[1, 2], [3, 4]]
  })
  .add(() => {
    // !数据类型：32位浮点型(float32), 布尔(bool), 32位整型(int32), 64位复数(complex64), 和字符串(string)。默认为 float32。
    const a = tf.tensor([
      [1, 2],
      [3, 4]
    ], [2, 2], 'int32');
    console.log('shape:', a.shape);
    console.log('dtype', a.dtype);
    a.print();
  })
  .add(() => {
    // !修改张量的形状
    const a = tf.tensor([
      [1, 2],
      [3, 4]
    ]);
    console.log('a shape:', a.shape);
    a.print();

    const b = a.reshape([4, 1]);
    console.log('b shape:', b.shape);
    b.print();
  })
  .add(() => {
    // !获取张量的值
    const a = tf.tensor([
      [1, 2],
      [3, 4]
    ]);
    //返回多维数组的值
    a.array().then((array: any) => console.log(array));
    // 返回张量所包含的所有值的一维数组
    a.data().then((data: any) => console.log(data));
  })
  .add(() => {
    // !操作
    const x = tf.tensor([1, 2, 3, 4]);
    const y = x.square(); // 相当于 tf.square(x)
    y.print(); // [1, 4, 9, 16]
  })
  .add(() => {
    const a = tf.tensor([1, 2, 3, 4]);
    const b = tf.tensor([10, 20, 30, 40]);
    const y = a.add(b); // 相当于 tf.add(a, b)
    y.print(); // [11, 22, 33, 44]
  })


demo.run();
