const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let colourOne = "black";
let colourTwo = "white";
let colourThree = "green";


function Colour(){
    console.log(document.getElementById('angle').checked)
    if (document.getElementById('angle').checked){
        var gradient = ctx.createLinearGradient(0,0,50,50);
    }
    else{
        var gradient = ctx.createLinearGradient(0,0,50,0);
    }
    // Add three color stops that start and stop at the same point to remove blend

    gradient.addColorStop(0, colourOne);
    gradient.addColorStop(0.33, colourOne);
    gradient.addColorStop(.33, colourTwo);
    gradient.addColorStop(.66, colourTwo);
    gradient.addColorStop(.66, colourThree);
    gradient.addColorStop(1, colourThree);
    
    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 50, 50);
}

document.getElementById("swatch-form").onsubmit = (e)=>{
    e.preventDefault()
    colourOne = document.getElementById('colour-one').value;
    colourTwo = document.getElementById('colour-two').value;
    colourThree = document.getElementById('colour-three').value;
    Colour()
}

document.getElementById('png').addEventListener('click', (e)=>{
    Image()
    })

window.onload = ()=>Colour()

