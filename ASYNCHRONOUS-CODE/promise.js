//MORE PROMISES
const github_API ="https://api.github.com/users/akshaymarch7";

const user =fetch(github_API)
console.log(user);























// const promise = fetch("../JSON/game.json")
//                .then(res=>{
//                  res.json();
//                })
//                .then(getData)
//                .catch(error=>{
//                 console.log(error);
//                })

// console.log("my promise", promise);               


// function getData(data){
//     console.log(data);
//     // data.forEach(element => {
//     //     console.log(element.formed);
//     // });
// }


// const array =[1,2,3,4];

// array.forEach(callback);

// function callback(element){
//      console.log(element*2);
// }







// ES5: Part 1
// var isMomHappy = true;

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );


// // call our promise
// var askMom = function () {
//     willIGetNewPhone
//         .then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//              // output: { brand: 'Samsung', color: 'black' }
//         })
//         .catch(function (error) {
//             // oops, mom didn't buy it
//             console.log(error.message);
//              // output: 'mom is not happy'
//         });
// };

// askMom();