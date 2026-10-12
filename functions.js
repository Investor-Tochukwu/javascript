const person = {
    name: "Emma",
    age: 50,
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}

console.log(person);
console.log(person.getBirthYear());