const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let colourOne;
let colourTwo;
let colourThree;


function tripleColour(){
    console.log(document.getElementById('angle').checked)
    if (document.getElementById('angle').checked){
        var gradient = ctx.createLinearGradient(0,0,50,50);
    }
    else{
        var gradient = ctx.createLinearGradient(0,0,50,0);
    }
    // Add three color stops that start and stop at the same point to remove blend

    gradient.addColorStop(0, colourOne);
    gradient.addColorStop(.333, colourOne);
    gradient.addColorStop(.333, colourTwo);
    gradient.addColorStop(.666, colourTwo);
    gradient.addColorStop(.666, colourThree);
    gradient.addColorStop(1, colourThree);
    
    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 50, 50);
}

function doubleColour(){
    console.log(document.getElementById('angle').checked)
    if (document.getElementById('angle').checked){
        var gradient = ctx.createLinearGradient(0,0,50,50);
    }
    else{
        var gradient = ctx.createLinearGradient(0,0,50,0);
    }
    // Add three color stops that start and stop at the same point to remove blend

    gradient.addColorStop(0, colourOne);
    gradient.addColorStop(.5, colourOne);
    gradient.addColorStop(.5, colourTwo);
    gradient.addColorStop(1, colourTwo);

    
    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 50, 50);
}

function singleColour(){

    ctx.fillStyle = colourOne;
    ctx.fillRect(0, 0, 50, 50);

}

document.getElementById("swatch-form").onsubmit = (e)=>{
    e.preventDefault()

    if(document.getElementById('colour-number').value==="3"){
        colourOne = document.getElementById('colour-one').value;
        colourTwo = document.getElementById('colour-two').value;
        colourThree = document.getElementById('colour-three').value;
        tripleColour()
    }else if (document.getElementById('colour-number').value==="2"){
        colourOne = document.getElementById('colour-one').value;
        colourTwo = document.getElementById('colour-two').value;
        doubleColour()
    }else{
        colourOne = document.getElementById('colour-one').value;
        singleColour()
    }
    document.getElementById('alert').classList.add('show')

}

document.getElementById("colour-number").addEventListener('change',(e)=>{
    if (e.target.value !=1){
        console.log(e.target.value)
        document.getElementById("angle").disabled=false;
    }else{
        document.getElementById("angle").disabled=true;
        document.getElementById("angle").checked=false;
    }
})

