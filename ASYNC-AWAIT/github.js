window.addEventListener('DOMContentLoaded',()=>{

    async function showAvator(){
        //reading from the json file
        let response = await fetch('./user.json');
        let user =await response.json();

        let githubResponse = await fetch(`https://api.github.com/users/${user.login}`);
        let githubUser = await githubResponse.json();

        //show the Avator
        let img = document.createElement('img');
        img.src =githubUser.avatar_url;
        img.className ="promise-avatar-example";
        document.body.append(img);

        //wait 3 seconds
        await new Promise((resolve, reject)=>setTimeout(resolve, 3000));
        img.remove();
        return githubUser;

    }
    showAvator();


//     class HttpError extends Error {
//         constructor(response) {
//           super(`${response.status} for ${response.url}`);
//           this.name = 'HttpError';
//           this.response = response;
//         }
//       }
      
//       async function loadJson(url) {
//         let response = await fetch(url);

//             if (response.status == 200) {
//               return response.json();
//             } else {
//               throw new HttpError(response);
//             }
         
//       }
      
//       // Ask for a user name until github returns a valid user
//      async function demoGithubUser() {
//         try{
//         let name = prompt("Enter a name?", "iliakan");
//         let user = await loadJson(`https://api.github.com/users/${name}`);
//         alert(`full name : ${user.name}`);
//         return user;

//         }catch(err){
//            if (err instanceof HttpError && err.response.status == 404) {
//              alert("No such user, please reenter.");
//                     return demoGithubUser();
//                   } else {
//                     throw err;
//                   }
            
//         }      
//     }
//   demoGithubUser();


  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    wait().then((results)=>{
       alert(results);
    })
  }
  f();



















    // async function loadJson(url) {
    //     let response =await fetch(url);
    //     // let res = await response.json();
    //      if(response.status == 200) {
    //         let json = await response.json();
    //         return json;
    //       } else {
    //         throw new Error(response.status);
    //       }
        
    //   }
      
    //   loadJson('https://javascript.info/no-such-user.json')
    //     .catch(alert); // Error:







})