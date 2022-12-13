function zad5() {
    var output5 = document.getElementById("zad5-output");
    var xp = document.getElementById("zad5-xp").valueAsNumber;
    var yp = document.getElementById("zad5-yp").valueAsNumber;
    var xl = document.getElementById("zad5-xl").valueAsNumber;
    var yl = document.getElementById("zad5-yl").valueAsNumber;
    var dp1 = document.getElementById("zad5-dp1").valueAsNumber;
    var dl1 = document.getElementById("zad5-dl1").valueAsNumber;
    var dlp = Math.sqrt(Math.pow(yp-yl,2) + Math.pow(xp-xl,2));
    output5.innerHTML = "";
    output5.innerHTML += "dlp = Math.sqrt(Math.pow(yp-yl,2) + Math.pow(xp-xl,2))";
    output5.innerHTML += "<br>";
    output5.innerHTML += "dlp = ";
    output5.innerHTML += dlp;
    output5.innerHTML += "<br>";
    var p = (-Math.pow(dp1,2) + Math.pow(dl1,2) + Math.pow(dlp,2)) / (2 * dlp);
    output5.innerHTML += "p = (-Math.pow(dp1,2) + Math.pow(dl1,2) + Math.pow(dlp,2)) / (2 * dlp);";
    output5.innerHTML += "<br>";
    output5.innerHTML += "p = ";
    output5.innerHTML += p;
    output5.innerHTML += "<br>";
    var q = (Math.pow(dp1,2) -Math.pow(dl1,2) + Math.pow(dlp,2)) / (2 * dlp);
    output5.innerHTML += "q = (Math.pow(dp1,2) -Math.pow(dl1,2) + Math.pow(dlp,2)) / (2 * dlp)";
    output5.innerHTML += "<br>";
    output5.innerHTML += "q = ";
    output5.innerHTML += q;
    output5.innerHTML += "<br>";
    var h = Math.sqrt(Math.pow(dl1,2) - Math.pow(p,2));
    output5.innerHTML += "h = Math.sqrt(Math.pow(dl1,2) - Math.pow(p,2))";
    output5.innerHTML += "<br>";
    output5.innerHTML += "h = ";
    output5.innerHTML += h;
    output5.innerHTML += "<br>";
    
    var A;
    var rad = Math.atan(Math.abs((yl - yp) / (xl -xp)));
    console.log(rad);
    if ((yl - yp) >= 0) {
        if ((xl - xp) > 0) {
            output5.innerHTML += "ćwiartka 1 <br>";
            output5.innerHTML += "A = czwartak <br>";
            A = rad;
            output5.innerHTML += "A = ";
            output5.innerHTML += A;
            output5.innerHTML += "<br>"
        } else {
            output5.innerHTML += "ćwiartka 2 <br>";
            output5.innerHTML += "A = PI - czwartak <br>";
            A = Math.PI - rad;
            output5.innerHTML += "A = ";
            output5.innerHTML += A;
            output5.innerHTML += "<br>"
        }
    } else {
        if ((xl - xp) < 0) {
            output5.innerHTML += "ćwiartka 3 <br>";
            output5.innerHTML += "A = PI + czwartak <br>";
            A = Math.PI + rad;
            output5.innerHTML += "A = ";
            output5.innerHTML += A;
            output5.innerHTML += "<br>"
        } else {
            output5.innerHTML += "ćwiartka 4 <br>";
            output5.innerHTML += "A = 2PI - czwartak <br>";
            A = 2 * Math.PI - rad;
            output5.innerHTML += "A = ";
            output5.innerHTML += A;
            output5.innerHTML += "<br>"
        }
    }
    console.log(A);
    var x1 = xp + p * Math.cos(A) + h * Math.sin(A);
    output5.innerHTML += "x1 = xp + p * Math.cos(A) + h * Math.sin(A)";
    output5.innerHTML += "<br>";
    output5.innerHTML += "x1 = ";
    output5.innerHTML += x1;
    output5.innerHTML += "<br>";
    var y1 = yp + p * Math.sin(A) - h * Math.cos(A);
    output5.innerHTML += "y1 = yp + p * Math.sin(A) - h * Math.cos(A)";
    output5.innerHTML += "<br>";
    output5.innerHTML += "y1 = ";
    output5.innerHTML += y1;
    output5.innerHTML += "<br>";
}