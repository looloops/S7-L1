//ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static ageComparison(user1, user2) {
    if (user1.age > user2.age) {
      console.log(user1.firstName + " is older than " + user2.firstName);
    } else {
      console.log(user2.firstName + " is older than " + user1.firstName);
    }
  }
}

const bobs = new User("Mario", "Rossi", "20", "Rome");
const fofs = new User("Sofia", "Cicirella", "25", "London");

User.ageComparison(bobs, fofs);

//ESERCIZIO 2
const formInput = document.querySelector("form");
const petName = document.getElementById("petName");
const petOwner = document.getElementById("petOwner");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  static sameOwner(pet1, pet2) {
    return pet1.petOwner === pet2.petOwner;
  }
}

const pets = [];
const table = document.getElementById("table");

formInput.onsubmit = function (e) {
  e.preventDefault();
  const pet = new Pet(petName.value, petOwner.value, species.value, breed.value);
  pets.push(pet);
  petName.value = "";
  petOwner.value = "";
  species.value = "";
  breed.value = "";
  console.log(pets);
  const tr = document.createElement("tr");
  table.appendChild(tr);
  Object.keys(pet).forEach((key) => {
    const td = document.createElement("td");
    td.innerText = pet[key];
    tr.appendChild(td);
  });
};
