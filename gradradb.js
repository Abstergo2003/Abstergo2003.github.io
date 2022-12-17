function gradradb() {
    var grad = document.getElementById("gradradb").valueAsNumber;
    var rad = (grad * Math.PI) / 200;
    var gradradoutput = document.getElementById("gradradoutputb");
    gradradoutput.innerHTML = "";
    gradradoutput.innerHTML += "radiany:<br>";
    gradradoutput.innerHTML += rad;
}