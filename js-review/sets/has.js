// Example 1: Check allowed user roles
const listofRoles = ["admin", "editor", "viewer", "guest", "admin"];
const allowedRoles = new Set();

function checkAccess(userRole) {
  if (allowedRoles.has(userRole)) {
    console.log("Access granted!");
  } else {
    console.log("Access denied!");
  }
}

checkAccess("admin"); // Access granted!
checkAccess("hacker"); // Access denied!
