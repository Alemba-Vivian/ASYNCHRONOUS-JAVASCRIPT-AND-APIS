async function fetchGiph(){
    const img = document.querySelector('img');
    const input = document.getElementById('search');

        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1TodTFKhH45JkANA4LhqWK1urxexTTGu&s=` + input.value, {mode: 'cors'});
        const catData = await response.json();
        img.src =catData.data.images.original.url;
        console.log(catData.data.images.original.url);

  }
  fetchGiph().catch(err=>{
    console.log(err);
  });


   



















// const server = {
//     people: [
//       {
//         name: "Odin",
//         age: 20,
//       },
//       {
//         name: "Thor",
//         age: 35,
//       },
//       {
//         name: "Freyja",
//         age: 29,
//       },
//     ],
  
//     getPeople() {
//       return new Promise((resolve, reject) => {
//         // Simulating a delayed network call to the server
//         setTimeout(() => {
//           resolve(this.people);
//         }, 2000);
//       });
    
//     },
//   };

//   function getPersonsInfo(name) {
//     return server.getPeople().then(people => {
//       return people.find(person => { return person.name === name });
//     });
//   }




//handling errors using try/catch block inside the async function
//   async function getPersonsInfo(name) {
//     try{
//         const people = await server.getPeople();
//         const person = people.find(person => { return person.name === name });
//         console.log(person)
//         return person;
//     }catch(error){
//          console.log(error);
//     }
    
//   }
// getPersonsInfo("Thor");

//handling errors using catch appended to the function call

// async function getPersonsInfo(name) {

//         const people = await server.getPeople();
//         const person = people.find(person => { return person.name === name });
//         console.log(person)
//         return person;
    
//   }
// getPersonsInfo("Thor").catch(err=>{
//     console.log(err);
// });
