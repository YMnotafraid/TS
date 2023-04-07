type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function trainPet(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish";
  } else {
    pet;
    return "bird";
  }
}
const fish: Fish = {
  swim: () => {
    console.log("swimming");
  },
};
const bird: Bird = {
  fly: () => {
    console.log("flying");
  },
};

console.log(trainPet(fish));
console.log(trainPet(bird));
