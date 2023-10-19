// JSON (javascript object notation) is a standardized format for structuring data
//JSON exists as a string
//Deserialization - is converting string to a native object
//Serialization - is converting a native object to a string so that it can be transmitted across the network


const superHeroes={
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  document.getElementById('para').innerHTML = ` ${superHeroes.members[0].name} <br>
                                                 ${superHeroes.members[0].age} <br>
                                                 ${superHeroes.members[0].secretIdentity} <br>
                                                 ${superHeroes.members[0].powers} <br>
                                                  <br><br><br>

                                                  ${superHeroes.members[1].name} <br>
                                                  ${superHeroes.members[1].age} <br>
                                                  ${superHeroes.members[1].secretIdentity} <br>
                                                  ${superHeroes.members[1].powers} <br>
                                                   <br><br><br>

                                                   ${superHeroes.members[2].name} <br>
                                                   ${superHeroes.members[2].age} <br>
                                                   ${superHeroes.members[2].secretIdentity} <br>
                                                   ${superHeroes.members[2].powers} <br>
                                                    <br><br><br>
                                                    `
  

 const players= [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]

document.getElementById('play').innerHTML =`This is the powers :${players[0].powers}`;
                                                 
  