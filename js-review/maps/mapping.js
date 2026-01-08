// Using Map - Clean and powerful
const users = new Map();

users.set(1, { name: "Israel", role: "developer", active: true });
users.set(2, { name: "Juan", role: "designer", active: false });
users.set(3, { name: "Maria", role: "manager", active: true });

// Easy operations
console.log(users.get(1)); // Get user by ID
console.log(users.has(2)); // Check if user exists
console.log(users.size); // How many users? 3
users.delete(2); // Remove Juan
console.log(users.size); // Now 2

// Easy iteration
users.forEach((userData, userId) => {
  console.log(`User ${userId}: ${userData.name}`);
});

// Or with for...of
for (const [userId, userData] of users) {
  console.log(`${userId} → ${userData.name}`);
}
