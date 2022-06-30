var container = document.createElement("div");
container.setAttribute("class", "container");
// ....................................................................
var heading = document.createElement("h1");
heading.setAttribute("id", "title");
heading.innerHTML = "PAGINATION";
container.append(heading);
document.body.append(container);
//.......................................................................
var para = document.createElement("p");
para.setAttribute("id", "description");
para.innerHTML ="All elements are created with dom";
container.append(para);
document.body.append(container);
// ....................................................................................
var div1 = document.createElement("div");
div1.setAttribute("id", "main");
div1.setAttribute("class", "table-responsive");

async function pagination(num1, num2) {
  div1.innerHTML = " ";
//   div1.innerHTML =null;

  try {
    let s1 = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
     
    let result = await s1.json();

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    table.setAttribute("class", "table table-bordered");

    var thead = document.createElement("thead");

    let tr = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.innerHTML = "ID";

    let th2 = document.createElement("th");
    th2.innerHTML = "NAME";

    let th3 = document.createElement("th");
    th3.innerHTML = "EMAIL";

    var tbody = document.createElement("tbody");

    tr.append(th1, th2, th3);
    thead.append(tr);
    table.append(thead);
    div1.append(table);

    for (var i = num1; i < num2; i++) {
      var tr1 = document.createElement("tr");

      var td1 = document.createElement("td");
      td1.innerHTML = result[i].id;

      var td2 = document.createElement("td");
      td2.innerHTML = result[i].name;

      var td3 = document.createElement("td");
      td3.innerHTML = result[i].email;

      tr1.append(td1, td2, td3);
      tbody.append(tr1);
      table.append(tbody);
    }
  } catch (error) {
    console.log(error);
  }
}

pagination(0, 10);

let div2 = document.createElement("div");
div2.setAttribute("id", "buttons");
div2.setAttribute("class", "d-flex justify-content-center");

let first = main_button("firstfunc()", "btn", "first");
let previous = main_button("previousfunc()", "btn", "previous");
let button1 = main_button("button(1)", "btn", 1);
let button2 = main_button("button(2)", "btn", 2);
let button3 = main_button("button(3)", "btn", 3);
let button4 = main_button("button(4)", "btn", 4);
let button5 = main_button("button(5)", "btn", 5);
let button6 = main_button("button(6)", "btn", 6);
let button7 = main_button("button(7)", "btn", 7);
let button8 = main_button("button(8)", "btn", 8);
let button9 = main_button("button(9)", "btn", 9);
let button10 = main_button("button(10)", "btn", 10);
let next = main_button("nextfunc()", "btn", "next");
let last = main_button("lastfunc()", "btn", "last");

var currentpage = 0;
var perpage = 10;
var maxpage = Math.ceil(100 / perpage);

function button(num) {
  if (num < 1) {
    num = 1;
  }
  if (num > maxpage) {
    num = maxpage;
  }

  var start = (num - 1) * maxpage;
  var end = num * maxpage;
  currentpage = num;
  pagination(start, end);
}

function previousfunc() {
  if (currentpage > 1) {
    button(currentpage - 1);
  }
}

function nextfunc() {
  if (currentpage < maxpage) {
    button(currentpage + 1);
  }
}

function firstfunc() {
  var start = 0;
  var end = perpage;
  pagination(start, end);
}

function lastfunc() {
  var start = 90;
  var end = 100;
  pagination(start, end);
}

div2.append(first, previous, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, next, last);

function main_button(onclick, id, value) {
  let button = document.createElement("button");
  button.setAttribute("onclick", onclick);
  button.setAttribute("id", id);
  button.innerHTML = value;
  return button;
}

container.append(div1, div2);
document.body.append(container);

