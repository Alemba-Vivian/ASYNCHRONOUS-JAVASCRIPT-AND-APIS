// window.addEventListener('DOMContentLoaded', ()=>{

//   const newGiph = document.getElementById('btn-new');




//   newGiph.addEventListener('click', fetchGiph);
//   input.addEventListener('input', searchGiph);


  function fetchGiph(){
    const img = document.querySelector('img');
    const input = document.getElementById('search');

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1TodTFKhH45JkANA4LhqWK1urxexTTGu&s=` + input.value)
    .then(response=>{
         response.json()

         .then(res=>{
            img.src =res.data.images.original.url;
            console.log(res.data.images.original.url);
         })
    })
   .catch(function(error){
      console.log(error);
    })
  }
  fetchGiph();

 




//   async function logMovies(){
//     const response =await fetch("https://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=nairobi")
//     const weather = await response.json()

//     console.log(weather.location);
//   }
//   logMovies();




















    // const output = document.querySelector("results");

    // fetch(
    //   "https://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=nairobi", 
    //   {mode:'cors'}
    // )
    //   .then((response) => {
    //     response.json().then(getWeatherData);
    //   })

    // .catch((error) => {
    //     console.log(error);
    //   });


    //   function getWeatherData(data){
    //     console.log(data.location);  
         
    //   }












// });


