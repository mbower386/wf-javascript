var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// John's age:
console.log(users[1].name + " - " + users[2].age);

// Name of first object:
console.log(users[0].name);

// Printing all users:
for (var i = 0; i < users.length; i++) {
  console.log(users[i].name + " - " + users[i].age);
}