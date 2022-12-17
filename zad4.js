function zad4() {
    var x1 = document.getElementById("zad4-x1").valueAsNumber;
    var y1 = document.getElementById("zad4-y1").valueAsNumber;
    var x2 = document.getElementById("zad4-x2").valueAsNumber;
    var y2 = document.getElementById("zad4-y2").valueAsNumber;
    var A12;
    var A21;
    var d12;
    var d1p;
    var d2p;
    var A1p;
    var alpha = document.getElementById("zad4-alpha").valueAsNumber;
    var beta = document.getElementById("zad4-beta").valueAsNumber;
    var dx;
    var dy;
    var xp;
    var yp;
    var rad = Math.atan(Math.abs((y2 - y1) / (x2 -x1)));
    console.log(rad);
    var output4 = document.getElementById("zad4-output");
    output4.innerHTML = "";
    output4.innerHTML += "dy";
    output4.innerHTML += y2 - y1;
    output4.innerHTML += "<br>";
    output4.innerHTML += "dx"
    output4.innerHTML += x2 - x1;
    output4.innerHTML += "<br>";
    output4.innerHTML += "arctan(|";
    output4.innerHTML += y2 - y1;
    output4.innerHTML += "|/|";
    output4.innerHTML += x2 - x1;
    output4.innerHTML += "|)";
    output4.innerHTML += "<br>"
    output4.innerHTML += "czwartak =";
    output4.innerHTML += rad;
    output4.innerHTML += "<br>"
    if ((y2 - y1) >= 0) {
        if ((x2 - x1) > 0) {
            console.log("ćwiartka 1");
            A12 = rad;
            A21 = Math.PI + rad;
            output4.innerHTML += "ćwiartka 1 <br>";
            output4.innerHTML += "Agh = czwartak <br>";
            output4.innerHTML += "Agh = ";
            output4.innerHTML += A12;
            output4.innerHTML += "<br>"
            output4.innerHTML += "Ahg = PI + czwartak <br>";
            output4.innerHTML += "Ahg = ";
            output4.innerHTML += A21;
            output4.innerHTML += "<br>"

        } else {
            console.log("ćwiartka 2");
            A12 = Math.PI - rad;
            A21 = 2 * Math.PI - rad;
            output4.innerHTML += "ćwiartka 2 <br>";
            output4.innerHTML += "Agh = PI - czwartak <br>";
            output4.innerHTML += "Agh = ";
            output4.innerHTML += A12;
            output4.innerHTML += "<br>"
            output4.innerHTML += "Ahg = 2PI - czwartak <br>";
            output4.innerHTML += "Ahg = ";
            output4.innerHTML += A21;
            output4.innerHTML += "<br>"
        }
    } else {
        if ((x2 - x1) < 0) {
            console.log("ćwiartka 3");
            A12 = Math.PI + rad;
            A21 = rad;
            output4.innerHTML += "ćwiartka 3 <br>";
            output4.innerHTML += "Agh = PI + czwartak <br>";
            output4.innerHTML += "Agh = ";
            output4.innerHTML += A12;
            output4.innerHTML += "<br>"
            output4.innerHTML += "Ahg = czwartak <br>";
            output4.innerHTML += "Ahg = ";
            output4.innerHTML += A21;
            output4.innerHTML += "<br>"
        } else {
            console.log("ćwiartka 4");
            A12 = 2 * Math.PI - rad;
            A21 = Math.Pi - rad;
            output4.innerHTML += "ćwiartka 4 <br>";
            output4.innerHTML += "Agh =2PI - czwartak <br>";
            output4.innerHTML += "Agh = ";
            output4.innerHTML += A12;
            output4.innerHTML += "<br>"
            output4.innerHTML += "Ahg = PI - czwartak <br>";
            output4.innerHTML += "Ahg = ";
            output4.innerHTML += A21;
            output4.innerHTML += "<br>"
        }
    }
    output4.innerHTML += "";
    console.log(A12);
    console.log(A21);
    d12 = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
    output4.innerHTML += "dgh = Math.sqrt((xh-xg)^2 + (yh-yg)^2)";
    output4.innerHTML += "<br>"
    output4.innerHTML += d12;
    output4.innerHTML += "<br>"
    console.log(d12);
    d1p = (d12 / Math.sin(alpha + beta)) * Math.sin(beta);
    output4.innerHTML += "dg1 = (dgh / Math.sin(alpha + beta)) * Math.sin(beta)"
    output4.innerHTML += "<br>"
    output4.innerHTML += d1p;
    output4.innerHTML += "<br>"
    d2p = (d12 / Math.sin(alpha + beta)) * Math.sin(alpha);
    output4.innerHTML += "dh1 = (dgh / Math.sin(alpha + beta)) * Math.sin(alpha)"
    output4.innerHTML += "<br>"
    output4.innerHTML += d2p;
    output4.innerHTML += "<br>"
    console.log(d1p);
    console.log(d2p);
    A1p = A12 + alpha;
    output4.innerHTML += "Ag1 = Agh + alpha";
    output4.innerHTML += "<br>";
    output4.innerHTML += A1p;
    output4.innerHTML += "<br>";
    dx = d1p * Math.cos(A1p);
    output4.innerHTML += "dx = dg1 * Math.cos(A1p)";
    output4.innerHTML += "<br>";
    output4.innerHTML += dx;
    output4.innerHTML += "<br>";
    dy = d1p * Math.sin(A1p);
    output4.innerHTML += "dy = dg1 * Math.sin(A1p)";
    output4.innerHTML += "<br>";
    output4.innerHTML += dy;
    output4.innerHTML += "<br>";
    xp = x1 + dx;
    output4.innerHTML += "x1 = xg + dx";
    output4.innerHTML += "<br>";
    output4.innerHTML += xp;
    output4.innerHTML += "<br>";
    yp = y1 + dy;
    output4.innerHTML += "y1 = yg+ dy";
    output4.innerHTML += "<br>";
    output4.innerHTML += yp;
    output4.innerHTML += "<br>";
}