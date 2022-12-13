function zad1() {
    var side = document.getElementById("zad1-side").value;
    var Xa = document.getElementById("zad1-Xa").valueAsNumber;
    var Ya = document.getElementById("zad1-Ya").valueAsNumber;
    var Xb = document.getElementById("zad1-Xb").valueAsNumber;
    var Yb = document.getElementById("zad1-Yb").valueAsNumber;
    var Xp;
    var Yp;
    var l = document.getElementById("zad1-l").valueAsNumber;
    var h = document.getElementById("zad1-h").valueAsNumber;
    var A;
    var rad = Math.atan(Math.abs((Yb - Ya) / (Xb -Xa)));
    console.log(rad);
    var output = document.getElementById("zad1-output");
    output.innerHTML = "";
    output.innerHTML += "dy";
    output.innerHTML += Yb-Ya;
    output.innerHTML += "<br>";
    output.innerHTML += "dx"
    output.innerHTML += Xb-Xa;
    output.innerHTML += "<br>";
    output.innerHTML += "arctan(|";
    output.innerHTML += Yb-Ya;
    output.innerHTML += "|/|";
    output.innerHTML += Xb-Xa;
    output.innerHTML += "|)";
    output.innerHTML += "<br>"
    output.innerHTML += "czwartak =";
    output.innerHTML += rad;
    output.innerHTML += "<br>"
    if ((Yb - Ya) >= 0) {
        if ((Xb - Xa) > 0) {
            output.innerHTML += "ćwiartka 1 <br>";
            output.innerHTML += "A = czwartak <br>";
            A = rad;
            output.innerHTML += "A = ";
            output.innerHTML += A;
            output.innerHTML += "<br>"
        } else {
            output.innerHTML += "ćwiartka 2 <br>";
            output.innerHTML += "A = PI - czwartak <br>";
            A = Math.PI - rad;
            output.innerHTML += "A = ";
            output.innerHTML += A;
            output.innerHTML += "<br>"
        }
    } else {
        if ((Xb - Xa) < 0) {
            output.innerHTML += "ćwiartka 3 <br>";
            output.innerHTML += "A = PI + czwartak <br>";
            A = Math.PI + rad;
            output.innerHTML += "A = ";
            output.innerHTML += A;
            output.innerHTML += "<br>"
        } else {
            output.innerHTML += "ćwiartka 4 <br>";
            output.innerHTML += "A = 2PI - czwartak <br>";
            A = 2 * Math.PI - rad;
            output.innerHTML += "A = ";
            output.innerHTML += A;
            output.innerHTML += "<br>"
        }
    }
    console.log(A);
    if (side == "l") {
        Xp = Xa + l * Math.cos(A) + h * Math.sin(A);
        output.innerHTML += "Xp = Xa + l * cos(A) + h * sin(A) <br>";
        Yp = Ya + l * Math.sin(A) - h * Math.cos(A);
        output.innerHTML += "Yp = Ya + l * sin(A) - h * cos(A) <br>"
    } else if (side =="p") {
        Xp = Xa + l * Math.cos(A) - h * Math.sin(A);
        output.innerHTML += "Xp = Xa + l * cos(A) - h * sin(A) <br>"
        Yp = Ya + l * Math.sin(A) + h * Math.cos(A);
        output.innerHTML += "Yp = Ya + l * sin(A) + h * cos(A) <br>"
    } else if (side == "s") {
        Xp = Xa + l * Math.cos(A);
        output.innerHTML += "Xp = Xa + l * cos(A) <br>"
        Yp = Ya + l * Math.sin(A);
        output.innerHTML += "Yp = Ya + l * sin(A) <br>"
    } else {
        console.log("zły argument");
    }
    console.log("Xp"); console.log(Xp);
    console.log("Yp"); console.log(Yp);
    output.innerHTML += "Xp:";
    output.innerHTML += Xp;
    output.innerHTML += "<br>";
    output.innerHTML += "Yp:";
    output.innerHTML += Yp;
}