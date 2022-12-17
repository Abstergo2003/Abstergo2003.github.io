function nxy(){
    var n = document.getElementById("poligonz-n").valueAsNumber;
    var g = document.getElementById("poligonz-g").valueAsNumber;
    var N1;
    var N2;
    var N3;
    var N4;
    var x;
    var y;
    var A;
    N1 = n * 0.95 + g * 0.5;
    N2 = n * 1.7 + g * 1.5;
    N3 = n * 0.85 + g * 4.1;
    N4 = n * 0.0004 + g * 0.0003;
    x = 5772615.47 + g * 500 + N2 * 2.8;
    y = 7504831.52 + g * 800 + N2 * 5.5;
    A = 17.3436 + N3;
    var outputpz = document.getElementById("poligonzw-output");
    outputpz.innerHTML = "";
    outputpz.innerHTML += "x = " + x + "<br>";
    outputpz.innerHTML += "y = " + y + "<br>";
    outputpz.innerHTML += "A = " + A + "g<br>";
    outputpz.innerHTML += "N1 = " + N1 + "m<br>";
    outputpz.innerHTML += "N2 = " + N2 + "m<br>";
    outputpz.innerHTML += "N3 = " + N3 + "g<br>";
    outputpz.innerHTML += "N4 = " + N4 + "g<br>";
}