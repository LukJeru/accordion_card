const drop1 = document.getElementById("dropdown_1");

const func1 = (event) => {
  let para  = document.getElementById("paragraph_1");
  let heading = document.getElementById("heading_1");
  let div = document.getElementById("dropdown_1");
  if (para.style.display === "none" && document.querySelectorAll('.clicked').length === 0) {
    para.style.display = "block";
    para.setAttribute("class", "clicked");
    heading.style.color = "hsl(237, 12%, 33%)";
    div.style.border = "none";
  } else {
    para.style.display = "none";
    para.classList.remove("clicked");
    heading.style.color = "";
    div.style.border = "";
  };
}

const drop2 = document.getElementById("dropdown_2");

const func2 = (event) => {
  let para  = document.getElementById("paragraph_2");
  let heading = document.getElementById("heading_2");
  let div = document.getElementById("dropdown_2");
  if (para.style.display === "none" && document.querySelectorAll('.clicked').length === 0) {
    para.style.display = "block";
    para.setAttribute("class", "clicked");
    heading.style.color = "hsl(237, 12%, 33%)";
    div.style.border = "none";
  } else {
    para.style.display = "none";
    para.classList.remove("clicked");
    heading.style.color = "";
    div.style.border = "";
  };
}

const drop3 = document.getElementById("dropdown_3");

const func3 = (event) => {
  let para  = document.getElementById("paragraph_3");
  let heading = document.getElementById("heading_3");
  let div = document.getElementById("dropdown_3");
  if (para.style.display === "none" && document.querySelectorAll('.clicked').length === 0) {
    para.style.display = "block";
    para.setAttribute("class", "clicked");
    heading.style.color = "hsl(237, 12%, 33%)";
    div.style.border = "none";
  } else {
    para.style.display = "none";
    para.classList.remove("clicked");
    heading.style.color = "";
    div.style.border = "";
  };
}

const drop4 = document.getElementById("dropdown_4");

const func4 = (event) => {
  let para  = document.getElementById("paragraph_4");
  let heading = document.getElementById("heading_4");
  let div = document.getElementById("dropdown_4");
  if (para.style.display === "none" && document.querySelectorAll('.clicked').length === 0) {
    para.style.display = "block";
    para.setAttribute("class", "clicked");
    heading.style.color = "hsl(237, 12%, 33%)";
    div.style.border = "none";
  } else {
    para.style.display = "none";
    para.classList.remove("clicked");
    heading.style.color = "";
    div.style.border = "";
  };
}

const drop5 = document.getElementById("dropdown_5");

const func5 = (event) => {
  let para  = document.getElementById("paragraph_5");
  let heading = document.getElementById("heading_5");
  let div = document.getElementById("dropdown_5");
  if (para.style.display === "none" && document.querySelectorAll('.clicked').length === 0) {
    para.style.display = "block";
    para.setAttribute("class", "clicked");
    heading.style.color = "hsl(237, 12%, 33%)";
    div.style.border = "none";
  } else {
    para.style.display = "none";
    para.classList.remove("clicked");
    heading.style.color = "";
    div.style.border = "";
  };
}


drop1.addEventListener("click", func1);
drop2.addEventListener("click", func2);
drop3.addEventListener("click", func3);
drop4.addEventListener("click", func4);
drop5.addEventListener("click", func5);
