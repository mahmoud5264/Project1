

let courses = "http://localhost:3000/Python";
const loc = "http://localhost:3000/";
function searchbar() {
  getText(courses);
}

function searchbutton(nxt) {
  console.log(loc + " hh " + nxt + " hhhh" + loc + nxt);
  courses = loc + nxt;
  getText(courses);
}
let dv=4;
async function getText(file) {
  let obj = await fetch(file);
  let text = await obj.json();
  document.getElementById("description").innerHTML =
    '<h2 style="font-size:150%;font-weight:bold">' +
    text.header +
    "</h2>" +
    '<h3 style="font-size:100%;line-height:20px;">' +
    text.description +
    "</h3>" +
    '<a href="index.html" style="display:inline-block;"><button style="font-weight:bold;font-size:80%;width:auto;padding:5px">Explore ' +
    text.name +
    "</button></a>";
    document.getElementById("n0").innerHTML ="";
    document.getElementById("n1").innerHTML ="";
    document.getElementById("n2").innerHTML ="";

    let num = 0;
  for (let i in text.courses) {
    const val = document.getElementById("search").value;
    if (val != "" && text.courses[i].title.indexOf(val) == -1) continue;

    let str = "n" + Math.floor(num / dv);
    num++;
    console.log(str + " " + num+' '+dv+' '+screen.width);
    document.getElementById(str).innerHTML +=
      '<div class="course" style="display:inline-block;width:18vw"><img src="' +
      text.courses[i].image +
      '"/>' +
      '<h5 class="bold" style="font-weight:bold">' +
      text.courses[i].title +
      "</h5>" +
      '<h6 style="font-weight:lighter;font-size:80%">' +
      text.courses[i].instructors[0].name +
      "</h6>" +
      '<span><strong style="font-size: 18px">' +
      parseFloat(text.courses[i].rating).toFixed(1) +
      "</strong> " +
      '<i class="fa fa-solid fa-star"></i> <i class="fa fa-solid fa-star"></i> <i class="fa fa-solid fa-star"> </i> <i class="fa fa-solid fa-star"></i> ' +
      '<i class="fa fa-solid fa-star-half"></i></span>' +
      '<h6 style="font-weight:bold;font-size:100%">E£' +
      text.courses[i].price +
      "</h6></div>";
  }
}
getText(courses);