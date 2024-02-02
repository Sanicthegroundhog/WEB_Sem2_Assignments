const building = {
  address: 1234,
  city: "Indianapolis",
  state: Indiana,
  floors: 3,

   place : function(){
      return this.address + this.city + this.state + this.floors;
  }
}

console.log(address);
console.log(city);
console.log(state);
console.log(building.place());


