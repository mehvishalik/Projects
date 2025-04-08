let input1 = document.getElementById("price");
console.log(input1);

let input2 = document.getElementById("product");
console.log(input2.value);
let button = document.getElementById("adding");
console.log(button);
let button2 = document.getElementById("button");
let total = [];
let h2 = document.createElement("h2");
let ul = document.querySelector("ul");
let h1 = document.createElement("h1");
let salary = parseInt(prompt(`Enter your Balance Amount `));
console.log(ul);
h1.innerText = `Balance Amount  : Rs.${salary}`;
ul.append(h1);
button.addEventListener("click", () => {
 
  
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    li.innerText = `${input2.value}= RS. ${input1.value}`;
    li.append(btn);
    ul.appendChild(li);
    let liInput = parseInt(input1.value);
    total.push(liInput);
    sum = total.reduce((acc, current) => acc + current, 0);
    h2.innerText = `Total = ${sum}`;
    h1.innerText = `Balance Amount  : Rs.${salary - sum}`;
    ul.append(h2);
    
    button2.addEventListener("click", () => {
     let div = document.querySelector (".ulDiv");
     div.style.disply = "none";
     button.innerText = "Restart";
    });
    
    btn.addEventListener("click", () => {
      li.remove();
      total.pop();
      sum = total.reduce((acc, current) => acc + current, 0);
      h1.innerText = `Balance Amount  : Rs.${salary - sum}`;
      h2.innerText = `Total = ${sum}`;
      input1.value = "";
    input2.value = "";
    });
  
});
