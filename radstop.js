function radstop() {
    var rad = document.getElementById("radstop").valueAsNumber;
    var stop = rad * 180 / Math.PI;
    document.getElementById("radstop-out").innerHTML = stop;
}