function scopeTest() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }
  console.log(x); // ?
  console.log(y); // ?
  console.log(z); // ?
}
scopeTest();
