function stoprad() {
    var stop = document.getElementById("stoprad").valueAsNumber;
    var rad = (stop * Math.PI) / 180;
    var stopradoutput = document.getElementById("stopradoutput");
    stopradoutput.innerHTML = "";
    stopradoutput.innerHTML += "radiany:<br>";
    stopradoutput.innerHTML += rad;
}