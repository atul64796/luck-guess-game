let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let replay = document.querySelector(".replay");

let mathvalue = Math.floor(Math.random() * 100);
console.log(mathvalue);

let arr = [
    {
        a: "Guess a number that you wish for",
        b: "Take the same amount of money from your friend",
        c: `I give you ${mathvalue} rupees`,
        d: "Add all the values",
        e: "Donate half of the money to poor people",
        f: "Return your friend's money",
        g: `The answer is ${mathvalue / 2}`,
    },
    
];

console.log(arr);

let counter = 0;






btn.addEventListener("click", () => {
  
    let keys = Object.keys(arr[0]);
    console.log(arr[0])
    
    if (counter < keys.length) {
        box.innerHTML = '';

        
        let nextKey = keys[counter];
        console.log(nextKey)
       
        let p = document.createElement("p");
        p.innerText = arr[0][nextKey];
        console.log(p)
        
        box.appendChild(p);

        console.log(p);

       
        counter++;
        
    } else {
  
        counter = 0;
        box.innerHTML = ''; 
        
            location.reload();  
         
    }
    
   
    
});

replay.addEventListener("click", () => {
    
    location.reload(); 
});