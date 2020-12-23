const add = (a,b) => {
    return a + b;
};
console.log(add(50, 1));

 const user = {
     name : 'Shalini',
     cities : ['Komarapalayam', 'Chennai'],
     printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);       
     }
 };
 console.log(user.printPlacesLived());

 const multiplier ={
     numbers : [5,10,15],
     multiplyBy : 5,
     multiply() {
         return this.numbers.map((number) => number * this.multiplyBy);
     }
 };
 console.log(multiplier.multiply());