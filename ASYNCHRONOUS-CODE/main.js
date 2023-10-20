window.addEventListener('DOMContentLoaded', ()=>{
    //callbacks in action
    // function showMessage(message){
    //    setTimeout(function(){
    //      console.log(message);
    //    }, 3000)
    // }

    // showMessage("function called 3s ago");


    // function fullName(firstName, lastName, callback){
    //     console.log(`My name is ${firstName} ${lastName}`);
    //     callback(lastName);
    // }

    // var greeting = function(ln){
    //     console.log(`welcome Mrs. ${ln}`);
    // }
    // fullName("Vivian", "Alemba", greeting)


    function publish(item, author, callback){   // Generic function with common data
        console.log(item);
        var date = new Date();
      
        callback(author, date);
    }
      
    function messages(author, time){   // Callback function with specific data
        var sendTime = time.toLocaleTimeString();
        console.log("Sent from " + author + " at " + sendTime);
      }
      
    function articles(author, date){   // Callback function with specific data
        var pubDate = date.toDateString();
        console.log("Written by " + author);
        console.log("Published " + pubDate);
    }
      
      publish("How are you?", "Monique", messages);
      
      publish("10 Tips for JavaScript Developers", "Jane Doe", articles);


















    //promise in action

    // let p = new Promise((resolve, reject)=>{
    //      let a = 1 + 6;
    //      if(a === 2){
    //        resolve("sucess");

    //      }else{
    //         reject("failed");
    //      }
    // });

    // p.then((message)=>{
    //    console.log("This is in the then " + message);
    // }).catch((message)=>{
    //    console.log("This is in the catch " + message);
    // })



    // const recordVideoOne = new Promise((resolve, reject)=>{
    //     resolve("Video 1 Recorded");
    // });

    // const recordVideoTwo = new Promise((resolve, reject)=>{
    //     resolve("Video 2 Recorded");
    // });

    // const recordVideoThree = new Promise((resolve, reject)=>{
    //     resolve("Video 3 Recorded");
    // });

    //promise.all will return all the videos once they are recorded. all of them, if one finished before others, it will wait
    // Promise.all([
    //     recordVideoOne,
    //     recordVideoTwo,
    //     recordVideoThree
    // ]).then((messages)=>{
    //    console.log(messages);
    // });

    //promise.race will return only the video that is recorded. even if others arent finished ,it will not wait
    // Promise.race([
    //     recordVideoOne,
    //     recordVideoTwo,
    //     recordVideoThree
    // ]).then((message)=>{
    //    console.log(message);
    // });



    // console.log("start");

    // setTimeout(function cb(){
    //     console.log("callback");
    // }, 5000);


    // fetch("https://api.netflix.com").then(function CBF(){
    //     console.log("CB NETFLIX");
    // })

    // console.log("end");


    // function success(data) {
    //     console.log( data );
    // }
    
    // function failure(err) {
    //     console.error( err );
    // }
    
    // ajax( "http://some.url.1", success, failure );









});



