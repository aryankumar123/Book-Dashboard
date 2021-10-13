let array = [];

function addItem() {
  let inputTitle = document.getElementById("title").value;
  let inputAuthor = document.getElementById("author").value;
  let inputPrice = document.querySelector("#Price").value;

  let arrayObj = {};
  arrayObj.title = inputTitle;
  arrayObj.author = inputAuthor;
  arrayObj.price = inputPrice;
  array.push(arrayObj);
  update();
}

function update() {
  let items = document.querySelector(".items");
  let str = "";
    array.forEach((ele, index) => {
      
      str += `<div class="list">
                  <button class="bb" onclick="deleted(${index})">X</button>
                  <h1>Book Details</h1>
                      <div class="itembox">
                      <h3>Title: <span> ${ele.title}</span></h3>
                      <h3>Author: <span> ${ele.author}</span></h3>
                      <h3>Price: <span>${ele.price}</span></h3>
                      
                  </div>
          </div>`;
    });
  items.innerHTML = str;
}

function deleted(index){
  array.splice(index, 1);
  update();
}


