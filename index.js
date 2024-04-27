// function add_item() {
//     // Getting box and ul by selecting id;
//     let item = document.getElementById("box");
//     let list_item = document.getElementById("list_item");
//     if(item.value != ""){
//         // Creating element and adding value to it
//         let make_li = document.createElement("LI");
//         make_li.appendChild(document.createTextNode(item.value));
//         // Adding li to ul
//         list_item.appendChild(make_li);
//         // Reset the value of box
//         item.value=""
//         // Delete a li item on click
//         make_li.onclick = function(){
//           this.parentNode.removeChild(this);
//         }
//     }
//     else{
//       // Alert msg when value of box is "" empty.
//       alert("plz add a value to item");
//     }
//   }









const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ""){
 alert("Write something!");
 }
 else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }
 inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
 if(e.target.tagName === "LI"){
    e.classList.toggle("Checked");
 }
 else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
 }
},false);


// function addTask() {
//    var taskInput = document.getElementById("list-container");
//    var taskValue = list-containerInput.value;
//    var li = document.createElement("li");
//    var checkbox = document.createElement("input");
//    checkbox.type = "checkbox";
//    li.appendChild(checkbox);
//    var textNode = document.createTextNode(taskValue);
//    li.appendChild(textNode);
//    var ul = document.getElementById("list");
//    ul.appendChild(li);
//    // Clear the input field
//    taskInput.value = "";
// }









  