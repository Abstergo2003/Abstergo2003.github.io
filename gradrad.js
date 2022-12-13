function gradrad() {
    var grad = document.getElementById("gradrad").valueAsNumber;
    var rad = (grad * Math.PI) / 200;
    var gradradoutput = document.getElementById("gradradoutput");
    gradradoutput.innerHTML = "";
    gradradoutput.innerHTML += "radiany:<br>";
    gradradoutput.innerHTML += rad;
}