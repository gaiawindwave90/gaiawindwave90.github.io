function darkMode() {
  document.getElementById("themes").className = "darkmode";
  document.getElementById("themes").className = "w3-content-dark";
  document.getElementById("container-themes").className = "w3-container w3-black";
  document.getElementById("navbar").className = "w3-bar w3-white";
 if(document.getElementById('p2') .style.display=='none')
 {document.getElementById('p2') .style.display=''}
{document.getElementById('p1') .style.display='none'}
}

function lightMode() {
  document.getElementById("themes").className = "lightmode";
  document.getElementById("themes").className = "w3-content";
  document.getElementById("container-themes").className = "w3-container w3-white";
  document.getElementById("navbar").className = "w3-bar w3-black";
 if(document.getElementById('p1') .style.display=='none')
{document.getElementById('p1') .style.display=''}
{document.getElementById('p2') .style.display='none'}
}