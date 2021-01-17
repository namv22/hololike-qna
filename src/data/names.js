function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
  var name1 = ["Crimson", "Emerald", "Gold", "Amber", "Silver", "Ivory", "Grizzly" ,"Hungry", "Wild" ,"Blue" ,"Hunting" ,"Assassin" ,"Night" , "Roaring" ,"Crying"];

  var name2 = ["Canine", "Hound", "Fox", "Skull", "Chameleon", "Hedgehog", "Crocodile", "Stallion", "Capybara"];

  var name =
    name1[getRandomInt(0, name1.length)] +
    " " +
    name2[getRandomInt(0, name2.length)];
  return name;
}

export default generateName;
