const big = document.querySelector('big');
const fancy = document.querySelector('fancy');
const boring = document.querySelector('boring');
const moo = document.querySelector('moo');

function display() {
    alert("Hello World");
}

function biggerText() {
    document.getElementById("myText").style.fontSize = "24px";
}

function fancify() {
    document.getElementById("myText").style.fontWeight = "bold";
    document.getElementById("myText").style.color = "blue";
    document.getElementById("myText").style.textDecoration = "underline";
}

function returnToNormal(){
    document.getElementById("myText").style.fontWeight = "normal";
    document.getElementById("myText").style.color = "black";
    document.getElementById("myText").style.textDecoration = "none";
}

function mooText(){
    var str = document.getElementById("myText");
    var parts = str.value.split(".");
    str.value = parts.join("-Moo.");
}


big.onclick = biggerText;
fancify.onclick = fancify;
boring.onclick = returnToNormal;
moo.onclick = mooText;




