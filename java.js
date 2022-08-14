const python_course = "http://localhost:3000/Python";

function searchbar() {
  getText(python_course);
}

async function getText(file) {
  let obj = await fetch(file);
  let text = await obj.json();
  document.getElementById("mainchild").innerHTML =
  '<h2>'+text.header+'</h2>'
    +'<h3>'+text.description+'</h3>'
    +'<a href="index.html"><button>Explore python</button></a>'
    +'<div class="courses" id="courses"></div>';
  for (let i in text.courses) {
    const val = document.getElementById("search").value;
    if (val != "" && text.courses[i].title.indexOf(val) == -1) continue;
    document.getElementById("courses").innerHTML +=
      '<div><img alt="Python" src="' +
      text.courses[i].image +
      '"/>' +
      '<h4 class="bold">' +
      text.courses[i].title +
      '</h4>' +
      '<h5>' +
      text.courses[i].instructors[0].name +
      "</h5>" +
      '<span><strong style="font-size: 18px">' +
      parseFloat(text.courses[i].rating).toFixed(1) +
      '</strong> ' +
      '<i class="fa fa-solid fa-star"></i> <i class="fa fa-solid fa-star"></i> <i class="fa fa-solid fa-star"> </i><i class="fa fa-solid fa-star"></i> ' +
      '<i class="fa fa-solid fa-star-half"></i></span>' +
      '<h4 class="bold">E£' +
      text.courses[i].price +
      '</h4>';
  }
}
getText(python_course);
