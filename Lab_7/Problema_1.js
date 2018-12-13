var a = 1;

function b() {
  a = 10;
  return;


  b();
  console.log("a=" + a);