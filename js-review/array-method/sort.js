// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending,
//  built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

const users = ["Zia", "Ann", "Bea", "Franco", "Manuel"];

// desc
users.sort((a, b) => (b > a ? 1 : -1));
users.sort((a, b) => (b > a ? -1 : 1));
users.sort((a, b) => a.localeCompare(b));

console.log(users);

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
// Expected output: Array [1, 100000, 21, 30, 4]
