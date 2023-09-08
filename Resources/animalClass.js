//A class Animal
class Animal {
  // Animal class with properties for species and sound.
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  //method to make animal sound
  makeSound() {
    return console.log(
      ` I am a ${this.species} and I have mouth to ${this.sound}`
    );
  }
}

// create sub class  'Dog' that inherits from the 'Animal' class
class Dog extends Animal {
  // 'Dog' inherits properties for species and sound, and adds an additional property for color.
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  // create sepcific methods for color and tailwagging
  setColor() {
    return console.log(`My color is ${this.color}`);
  }
  wagTail() {
    return console.log(
      `I am  a ${this.species} and I wag my ${this.color} tail when I am happy`
    );
  }

  // Override the make sound method from "Animal" to include the dog's color.
  makeSound() {
    return console.log(
      ` I  am  a ${this.color} ${this.species} and I have mouth to ${this.sound}`
    );
  }
}
