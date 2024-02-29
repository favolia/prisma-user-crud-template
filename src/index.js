const { Store, Get, Update, Destroy } = require("./function/crud");

// [[ PRISMA CRUD EXAMPLE ]]

// Create new User
// ----------------------
// Store({
//     username: 'YOUR_USERNAME', // [Required]
//     name: 'YOUR_NAME', // [Optional]
//     age: 20, // [Required]
//     isAdult: true, // [Required]
//     phone: '62***********' // [Optional]
// })


// Fetch all Users
// ----------------------
// Get().then(d => console.log(d))


// Update user data by id
// ----------------------
// Update({
//     whereId: 2, // [Required] which id to update
//     username: 'YOUR_USERNAM', // [Required]
//     name: 'YOUR_NAME', // [Optional]
//     age: 20, // [Required]
//     isAdult: true, // [Required]
//     phone: '62800000000' // [Optional]
// }).then(d => console.log(d))


// Delete user by id
// ----------------------
// Destroy({
//     whereId: 2 // [Required] which id to delete
// })