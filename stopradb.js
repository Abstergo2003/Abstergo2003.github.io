function stopradb() {
    var stop = document.getElementById("stopradb").valueAsNumber;
    var rad = (stop * Math.PI) / 180;
    var stopradoutput = document.getElementById("stopradoutputb");
    stopradoutput.innerHTML = "";
    stopradoutput.innerHTML += "radiany:<br>";
    stopradoutput.innerHTML += rad;
}