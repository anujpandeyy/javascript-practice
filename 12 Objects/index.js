const person = {
    firstName: "Anuj",
    lastName: "Pandey",
    age: 21,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.age);

const x = person;
x.age = 22;


console.log(x);
console.log(person.age);
delete person.age;
console.log(person);
person.age = 22;
console.log(person);

console.log(person.fullName());

person.fullName = function (){
    return (this.firstName + " " + this.lastName).toUpperCase();
}

console.log(person.fullName());



var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    getSummary: function (){
        return this.title + " " + "was written by" + " " + this.author + " " + "in" + " " + this.yearPublished;
    }
}



console.log(book.getSummary());



