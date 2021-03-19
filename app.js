const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Rohit",
    age: 25
});
const person1 = new Person({
    name: "Kunal",
    age: 27
});
const person2 = new Person({
    name: "Chacha",
    age: 91
});

// person.save();
// person1.save();
// person2.save();

// Person.insertMany([person, person1, person2], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success");
//     }
// });

Person.find(function (err, myFruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(myFruits);
    }
});
