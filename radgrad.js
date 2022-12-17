function radgrad() {
    var rad = document.getElementById("radgrad").valueAsNumber;
    var grad = rad * 200 / Math.PI;
    document.getElementById("radgrad-out").innerHTML = grad;
}