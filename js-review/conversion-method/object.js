const album = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

// object - to string
console.log(JSON.stringify(album));
console.log(Object.values(album).join(","));
console.log(
  Object.entries(album)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ")
);

// object - to number

// object -  to array
