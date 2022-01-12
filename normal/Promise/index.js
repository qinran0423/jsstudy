// // Promise 执行是同步的   executor 同步的
// const p =new Promise((resolve, reject) => {

// })

// // 异步
// p.then((res) => {

// })


// 异步程序
// const data =  $.ajax({
//   url: 'http://localhost:3000/data.json',
//   async: false
// })

// console.log(getNames(data.responseJSON));
// console.log('I am a crazy guy');


// promise 的存在  是异步问题同步化的解决方案
const p = new Promise((resolve, reject) => {
  $.ajax({
    url: 'http://localhost:3000/data.json',
    success(data) {
      resolve(data)
    }
  })
})

p.then(res => {
  console.log(getNames(res));

})

console.log('I am a crazy guy');



function  getNames(data) {
  return data.map((item) => item.name)
}
