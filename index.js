
//給每個 list 加上取消的 icon
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var icon = `<i class="fas fa-trash"></i>`
  span.className = "close";
  span.innerHTML= icon;
  myNodelist[i].appendChild(span);
}

// 按下 icon 後會移除該 list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.remove();
  }
}

//點擊 list 時加上 classname checked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
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
  var li = document.createElement("li");
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("請輸入內容");
  } else {
    document.getElementById("myul").appendChild(li);
  }

  document.getElementById("myinput").value = "";

  var span = document.createElement("SPAN");
  var icon = `<i class="fas fa-trash"></i>`
  span.className = "close";
  span.innerHTML = icon;
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.remove();
    }
  }
}

//按刪除鍵刪除全部代辦事項
let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click',function(){
    var list = document.querySelector('ul');
    list.innerHTML="";
    
})
