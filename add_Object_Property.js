function Person(firstName,lastName,age,eyeColor)
{
   this.firstName=firstName,
   this.lastName=lastName,
   this.age=age,
   this.eyeColor=eyeColor
   
}
Person.prototype.nationality = "Bangladesh";

Person.prototype.fullName= function(){
    return this.firstName+" "+this.lastName;
}

const myself = new Person("Faisal","Ahmmed",25,"Brown");
const myWife = new Person("Jannatul","Ferdous",24,"Blue");

const myMother = new Person("Moniara","Begum", 50,"Brown");




 
console.log("My full name is "+myself.fullName());
console.log("I am from "+myself.nationality);
