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
  const desc = document.getElementById("description");
  desc.innerHTML = "";
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  h2.style.fontSize = "150%";
  h2.style.fontWeight = "bold";
  h3.style.fontSize = "100%";
  h3.style.lineHeight = "20px";
  const text2 = document.createTextNode(text.header);
  const text3 = document.createTextNode(text.description);
  h2.appendChild(text2);
  h3.appendChild(text3);
  desc.appendChild(h2);
  desc.appendChild(h3);

  const link = document.createElement("a");
  link.href = "index.html";
  link.style.display = "inline-block";
  const btn = document.createElement("button");
  btn.style.fontWeight = "bold";
  btn.style.fontSize = "80%";
  btn.style.width = "auto";
  btn.style.padding = "5px";
  const btnText = document.createTextNode("Explore " + text.name);
  btn.appendChild(btnText);
  desc.appendChild(btn);
  document.getElementById("n0").innerHTML = "";
  document.getElementById("n1").innerHTML = "";
  document.getElementById("n2").innerHTML = "";

  let num = 0;
  for (let i in text.courses) {
    const val = document.getElementById("search").value;
    if (val != "" && text.courses[i].title.indexOf(val) == -1) continue;
    let str = "n" + Math.floor(num / 4);
    num++;
    const currentItem = document.getElementById(str);
    const dv = document.createElement("div");
    dv.style.display = "inline-block";
    dv.style.width = "18vw";
    dv.classList.add("course");
    currentItem.appendChild(dv);
    const img = document.createElement("img");
    img.src = text.courses[i].image;
    dv.appendChild(img);
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    h5.style.fontWeight = "bold";
    h6.style.fontWeight = "lighter";
    h6.style.fontSize = "80%";
    const text5 = document.createTextNode(text.courses[i].title);
    const text6 = document.createTextNode(text.courses[i].instructors[0].name);
    h5.appendChild(text5);
    h6.appendChild(text6);
    dv.appendChild(h5);
    dv.appendChild(h6);
    const spn = document.createElement("span");
    const strong = document.createElement("strong");
    strong.style.fontSize = "18px";
    const spanText = document.createTextNode(
      parseFloat(text.courses[i].rating).toFixed(1)
    );
    strong.appendChild(spanText);
    spn.appendChild(strong);
    for (let j = 0; j < 5; j++) {
      const star = document.createElement("i");
      star.classList.add("fa");
      star.classList.add("fa-solid");
      if (j < 4) star.classList.add("fa-star");
      else star.classList.add("fa-star-half");
      spn.appendChild(star);
    }
    dv.appendChild(spn);
    const lastH = document.createElement("h6");

    lastH.style.fontWeight = "bold";
    lastH.style.fontSize = "100%";
    const lastText = document.createTextNode("E£" + text.courses[i].price);
    lastH.appendChild(lastText);
    dv.appendChild(lastH);
  }
}

getText(courses);
