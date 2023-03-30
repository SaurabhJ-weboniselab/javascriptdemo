function add(){
    document.getElementById("output").value = parseFloat(document.getElementById("input1").value) + parseFloat(document.getElementById("input2").value);
}

function sub(){
    document.getElementById("output").value = document.getElementById("input1").value - document.getElementById("input2").value;
}


function count_numbers(){

  var str_arr=document.getElementById("inputarray").value;

  var arr = str_arr.split(",");
  //const arr = [1, 2, 3, 1,1,1,3,3,4];
alert(typeof(arr));
alert(arr);
const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
alert(JSON.stringify(count));
}
let num =2;
let winobj=[];
function openNew(){
  for (let i = 0; i < num; i++) {
    winobj[i]=window.open("/home/sourabhj/Documents/workspace/javascriptdemo/JavaScriptDemo.html","_blank");
    console.log(winobj[i]);
  }
}

let counter = num-1;

function closeTabR(x){
  alert(x);
  //alert(winobj[x]);
  //console.log(JSON.stringify(winobj[x]));
  if (x>=0){
    alert("before winobj[x].close()")
  winobj[x].close();
  alert("after winobj[x].close()");
  closeTabR(x-1);}
  else{
    return 1;
  }
}
function closeTab(){
  alert("in closetab ");
  alert(counter);
  closeTabR(counter);
}

