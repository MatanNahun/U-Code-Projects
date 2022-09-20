console.log("model");
console.log("hi again");

async function show() {
  let res = await $.get("/sanity");
  console.log(res);
}

show();
