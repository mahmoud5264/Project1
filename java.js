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

async function getText(file) {
  let obj = await fetch(file);
  let text = await obj.json();
  document.getElementById("mainchild").innerHTML =
    '<h2 style="font-size:150%;font-weight:bold">' +
    text.header +
    "</h2>" +
    '<h3 style="font-size:100%;line-height:20px;">' +
    text.description +
    "</h3>" +
    '<a href="index.html" style="display:inline-block;"><button style="font-weight:bold;font-size:80%;width:auto;padding:5px">Explore ' +
    text.name +
    "</button></a>" +
    '<div class="top-categories courses row" id="courses"></div>';
  for (let i in text.courses) {
    const val = document.getElementById("search").value;
    if (val != "" && text.courses[i].title.indexOf(val) == -1) continue;
    document.getElementById("courses").innerHTML +=
      '<div class="col-12 col-md-4 col-lg-2" style="min-width:20%"><img alt="Python" src="' +
      text.courses[i].image +
      '"/>' +
      '<h6 class="bold" style="font-weight:bold">' +
      text.courses[i].title +
      "</h6>" +
      '<h6 style="font-weight:lighter;font-size:80%">' +
      text.courses[i].instructors[0].name +
      "</h6>" +
      '<span><strong style="font-size: 18px">' +
      parseFloat(text.courses[i].rating).toFixed(1) +
      "</strong> " +
      '<i class="fa fa-solid fa-star"></i> <i class="fa fa-solid fa-star"></i> <i class="fa fa-solid fa-star"> </i><i class="fa fa-solid fa-star"></i> ' +
      '<i class="fa fa-solid fa-star-half"></i></span>' +
      '<h6 style="font-weight:bold;font-size:100%">E£' +
      text.courses[i].price +
      "</h6>";
  }
}
getText(courses);
