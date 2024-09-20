// array

users = [
	{
		firstName: "Bob",
		age: 20,
		admin: false,
	},
	{
		firstName: "Elsa",
		age: 34,
		admin: true,
	},
]

// for (let index = 0; index < 2; index++) {
//     const element = users[index]
//     console.log(element);
// }

users.forEach((element) => {
	console.log(element.age)
})
