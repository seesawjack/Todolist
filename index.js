//給每個 list 加上編輯跟取消的 icon
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {       //加上編輯的 icon
  const btn = document.createElement("button");
  const icon = `<i class="fas fa-edit"></i>`
  btn.className = "edit";
  btn.innerHTML= icon;
  myNodelist[i].appendChild(btn);
}
for (i = 0; i < myNodelist.length; i++) {       //加上刪除的 icon
  const btn = document.createElement("button");
  const icon = `<i class="fas fa-trash"></i>`
  btn.className = "close";
  btn.innerHTML= icon;
  myNodelist[i].appendChild(btn);
}

var edit = document.getElementsByClassName("edit");   //可編輯動作
var i;
for (i = 0; i < edit.length; i++) {
  edit[i].onclick = function() {
    this.previousElementSibling.contentEditable = true;
    this.previousElementSibling.focus();
  }
}


// 按下取消的 icon 後會移除該 list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.remove();
  }
}

//點擊 list 時加上 classname checked
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

//按 enter 鍵即可新增 list
let inputTxt = document.querySelector('.txt');
inputTxt.addEventListener('keypress',function(e){
    if (e.which === 13) {
        newElement();
    }
})

//按下新增鍵後增加一個 list
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myinput").value;
  const span = document.createElement("span");
  span.textContent = inputValue;
  li.appendChild(span);
  
  if (inputValue === '') {
    alert("請輸入內容");
  } else {
    document.getElementById("myul").appendChild(li);
  }

  document.getElementById("myinput").value = "";  //清空 input 的值
  
  const editBtn = document.createElement("button");  //新增 edit 的按鈕
  editBtn.innerHTML = `<i class="fas fa-edit"></i>`
  li.appendChild(editBtn);

  const delBtn = document.createElement("button");  //新增 delete 的按鈕
  delBtn.innerHTML = `<i class="fas fa-trash"></i>`
  li.appendChild(delBtn);

  editBtn.addEventListener("click", function () {  //按下 edit 編輯該 list
      this.previousElementSibling.contentEditable = true;
      this.previousElementSibling.focus();
  });
  delBtn.addEventListener("click", function () {  //按下 delete 刪除該 list
    this.parentElement.remove();
  });
}

//按刪除鍵刪除全部代辦事項
let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click',function(){
    const check = window.confirm('您確定要刪除全部嗎');
    if (check == true) {
      const list = document.querySelector('ul');
      list.innerHTML="";
    }
})