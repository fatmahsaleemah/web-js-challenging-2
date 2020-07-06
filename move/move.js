function myFunction() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



let arr = [];

console.log(arr);


function addToCart(item) {
    arr =[]
    arr.push(item);
    
  }

  let ul = document.createElement("ul");
ul.className = "myUL";
document.getElementById("container").appendChild(ul);


function myFunction() {
    
    create(arr);
  }
  
  function create(arr) {
   
    arr.forEach(function (data) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML += data;
      li.className = "myList";
    });

  }