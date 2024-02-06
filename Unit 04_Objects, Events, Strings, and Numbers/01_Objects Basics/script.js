const building = {
  address: 1234,
  city: "Indianapolis",
  state: Indiana,
  floors: 3,

   place : function(){
      return this.address + this.city + " " + this.state + this.floors;
  }
};

console.log(building.address);
console.log(building.city);
console.log(building.state);
console.log(building.place());