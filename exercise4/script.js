
function update()
{
let redBorder = document.getElementById("red").value;
let greenBorder = document.getElementById("green").value;
let blueBorder = document.getElementById("blue").value;
let borderWidth = document.getElementById("width").value;
let redBackground = document.getElementById("redBackground").value;
let greenBackground = document.getElementById("greenBackground").value;
let blueBackground = document.getElementById("blueBackground").value;


document.getElementById("sampletext").style.borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")";
document.getElementById("sampletext").style.backgroundColor = "rgb("+redBackground+","+greenBackground+","+blueBackground+")";
document.getElementById("sampletext").style.borderWidth = borderWidth;
alert("Current Border Color:" + sampletext.style.borderColor + " Current Border Width: " + sampletext.style.borderWidth + "Current Background Color: " + sampletext.style.backgroundColor);

}
