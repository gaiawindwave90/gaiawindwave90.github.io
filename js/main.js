function darkMode() {
  document.getElementById("themes").className = "darkmode";
  document.getElementById("container-themes").className = "w3-container w3-black";
  document.getElementById("navbar").className = "w3-bar w3-white";
 if(document.getElementById('p2') .style.display=='none')
 {document.getElementById('p2') .style.display=''}
{document.getElementById('p1') .style.display='none'}
}

function lightMode() {
  document.getElementById("themes").className = "lightmode";
  document.getElementById("container-themes").className = "w3-container w3-white";
  document.getElementById("navbar").className = "w3-bar w3-black";
 if(document.getElementById('p1') .style.display=='none')
{document.getElementById('p1') .style.display=''}
{document.getElementById('p2') .style.display='none'}
}

function openPicture(pictureName) {
  var i;
  var x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pictureName).style.display = "block";  
}

function openVideo(videoName) {
  var i;
  var x = document.getElementsByClassName("video");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(videoName).style.display = "block";  
}

function openSecrets(secretName) {
  var i;
  var x = document.getElementsByClassName("secret");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(secretName).style.display = "block";  
}