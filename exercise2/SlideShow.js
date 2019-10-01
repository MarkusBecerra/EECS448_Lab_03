var imagearray = ["images/sheentpose.jpg", "images/sheenimage2.jpeg", "images/sheen3.jpg", "images/sheen4.jpg", "images/sheen5.webp", "images/sheen6.jpg"]
var index = 0;



function previous()
{
  if(index == 0)
  {
    index = imagearray.length - 1;
  }
  else {
    index--;
  }
    document.getElementById("currentimage").src = imagearray[index];
}

function next()
{
  if(index < imagearray.length - 1)
  {
    index++;
  }
  else {
    index = 0;
  }
  document.getElementById("currentimage").src = imagearray[index];
}
