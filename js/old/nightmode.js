document.addEventListener("DOMContentLoaded", function(event) {

var div = document.getElementById('mode');
div.addEventListener('click', function(e){

var li = document.getElementById('content-mode');

var ac = document.getElementById('accordion-div');

var bgdark = document.getElementById('dark-background');

var na = document.getElementById('navagator');
var fo = document.getElementById('footer');

if (li.className.split(' ')[1] == "content-dark") {

li.classList.remove('content-dark');

bgdark.classList.remove('bg-darker');
bgdark.classList.add('bg-lighter');

na.classList.remove('navbar-dark');
na.classList.remove('navbar-nbg-dark');
na.classList.remove('bg-light');
na.classList.add('navbar-light');
na.classList.add('navbar-nbg');
na.classList.add('bg-dark');

ac.classList.remove('bg-dark');
ac.classList.add('bg-light');

fo.classList.remove('navbar-dark');
fo.classList.remove('navbar-nbg-dark');
fo.classList.remove('bg-light');
fo.classList.add('navbar-light');
fo.classList.add('navbar-nbg');
fo.classList.add('bg-dark');

}else{

li.classList.add('content-dark');

na.classList.add('navbar-dark');
na.classList.add('navbar-nbg-dark');
na.classList.add('bg-light');

bgdark.classList.add('bg-darker');
bgdark.classList.remove('bg-lighter');

na.classList.remove('navbar-light');
na.classList.remove('navbar-nbg');
na.classList.remove('bg-dark');

fo.classList.add('navbar-dark');
fo.classList.add('navbar-nbg-dark');
fo.classList.add('bg-light');
fo.classList.remove('navbar-light');
fo.classList.remove('navbar-nbg');
fo.classList.remove('bg-dark');

ac.classList.add('bg-dark');
ac.classList.remove('bg-light');
}
});
});