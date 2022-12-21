function zad3() {
    var xe = document.getElementById("zad3-xe").valueAsNumber;
    var ye = document.getElementById("zad3-ye").valueAsNumber;
    var xf = document.getElementById("zad3-xf").valueAsNumber;
    var yf = document.getElementById("zad3-yf").valueAsNumber;
    var A;
    var str1 = document.getElementById("strona1").value;
    var str2 = document.getElementById("strona2").value;
    var str2 = document.getElementById("strona2").value;
    var rad = Math.atan(Math.abs((yf - ye) / (xf -xe)));
    console.log(rad);
    var output2 = document.getElementById("zad3-output");
    output2.innerHTML = "";
    output2.innerHTML += "dy";
    output2.innerHTML += yf-ye;
    output2.innerHTML += "<br>";
    output2.innerHTML += "dx"
    output2.innerHTML += xf-xe;
    output2.innerHTML += "<br>";
    output2.innerHTML += "arctan(|";
    output2.innerHTML += yf-ye;
    output2.innerHTML += "|/|";
    output2.innerHTML += xf-xe;
    output2.innerHTML += "|)";
    output2.innerHTML += "<br>"
    output2.innerHTML += "czwartak =";
    output2.innerHTML += rad;
    output2.innerHTML += "<br>"
    if ((yf - ye) >= 0) {
        if ((xf - xe) > 0) {
            output2.innerHTML += "ćwiartka 1 <br>";
            output2.innerHTML += "A = czwartak <br>";
            A = rad;
            output2.innerHTML += "A = ";
            output2.innerHTML += A;
            output2.innerHTML += "<br>"
        } else {
            console.log("ćwiartka 2");
            output2.innerHTML += "ćwiartka 2 <br>";
            output2.innerHTML += "A = PI - czwartak <br>";
            A = Math.PI - rad;
            output2.innerHTML += "A = ";
            output2.innerHTML += A;
            output2.innerHTML += "<br>"
        }
    } else {
        if ((xf - xe) < 0) {
            output2.innerHTML += "ćwiartka 3 <br>";
            output2.innerHTML += "A = PI + czwartak <br>";
            A = Math.PI + rad;
            output2.innerHTML += "A = ";
            output2.innerHTML += A;
            output2.innerHTML += "<br>"
        } else {
            output2.innerHTML += "ćwiartka 4 <br>";
            output2.innerHTML += "A = 2PI - czwartak <br>";
            A = 2 * Math.PI - rad;
            output2.innerHTML += "A = ";
            output2.innerHTML += A;
            output2.innerHTML += "<br>"
        }
    }
    var B1 = document.getElementById("zad3-B1").valueAsNumber;
    if (str1 == "p") {
        var A2 = A - B1 + Math.PI;
        output2.innerHTML += "A2 = A - B1 + PI;";
        output2.innerHTML += "<br>"
        output2.innerHTML += "A2 = ";
        output2.innerHTML += A2;
        output2.innerHTML += "<br>"
    } else if (str1 == "l") {
        var A2 = A + B1 - Math.PI;
        output2.innerHTML += "A2 = A + B1 - PI;";
        output2.innerHTML += "<br>"
        output2.innerHTML += "A2 = ";
        output2.innerHTML += A2;
        output2.innerHTML += "<br>"
    } else {
        console.log("źle");
        output2.innerHTML += "źle"
    }
    console.log("A");
    console.log(A);
    console.log("A2");
    console.log(A2);
    var l1 = document.getElementById("zad3-l1").valueAsNumber;
    var xp1;
    var yp1;
    xp1 = xf + l1 * Math.cos(A2);
    output2.innerHTML += "xp1 = xf + l1 * cos(A2)";
    output2.innerHTML += "<br>"
    output2.innerHTML += xp1;
    output2.innerHTML += "<br>"
    yp1 = yf + l1 * Math.sin(A2);
    output2.innerHTML += "yp1 = yf + l1 * sin(A2)";
    output2.innerHTML += "<br>"
    output2.innerHTML += yp1;
    output2.innerHTML += "<br>"
    console.log("xp1");
    console.log(xp1);
    console.log("yp1");
    console.log(yp1);
    var xp2;
    var yp2;
    var l2 = document.getElementById("zad3-l2").valueAsNumber;
    var A3;
    var B2 = document.getElementById("zad3-B2").valueAsNumber;
    if (str2 == "p") {
        var A3 = A2 - B2 + Math.PI;
        output2.innerHTML += "A3 = A2 - B2 + PI;";
        output2.innerHTML += "<br>"
        output2.innerHTML += "A3 = ";
        output2.innerHTML += A3;
        output2.innerHTML += "<br>"
    } else if (str2 == "l") {
        var A3 = A2 + B2 - Math.PI;
        output2.innerHTML += "A3 = A2 + B2 - PI;";
        output2.innerHTML += "<br>"
        output2.innerHTML += "A3 = ";
        output2.innerHTML += A3;
        output2.innerHTML += "<br>"
    } else {
        console.log("źle");
    }
    console.log("A3");
    console.log(A3);
    console.log("xp2");
    xp2 = xp1 + l2 * Math.cos(A3);
    console.log(xp2);
    console.log("yp2");
    yp2 = yp1 + l2 * Math.sin(A3);
    output2.innerHTML += "xp2 = xp1 + l2 * cos(A3)";
    output2.innerHTML += "<br>"
    output2.innerHTML += xp2;
    output2.innerHTML += "<br>"
    output2.innerHTML += "yp2 = yp1 + l2 * sin(A3)";
    output2.innerHTML += "<br>"
    output2.innerHTML += yp2;
    output2.innerHTML += "<br>"
    console.log(yp2);
    var xp3;
    var yp3;
    var l3 = document.getElementById("zad3-l3").valueAsNumber;
    var A4;
    var B3 = document.getElementById("zad3-B3").valueAsNumber;
    if (str3 == "p") {
        var A4 = A3 - B3 + Math.PI;
        output2.innerHTML += "A4 = A3 - B3 + PI;";
        output2.innerHTML += "<br>"
        output2.innerHTML += "A4 = ";
        output2.innerHTML += A4;
        output2.innerHTML += "<br>"
    } else if (str3 == "l") {
        var A4 = A3 + B3 - Math.PI;
        output2.innerHTML += "A4 = A3 + B3 - PI;";
        output2.innerHTML += "<br>"
        output2.innerHTML += "A4 = ";
        output2.innerHTML += A4;
        output2.innerHTML += "<br>"
    } else {
        console.log("źle");
    }
    xp3 = xp2 + l3 * Math.cos(A4);
    yp3 = yp2 + l3 * Math.sin(A4);
    output2.innerHTML += "xp3 = xp2 + l3 * cos(A4)";
    output2.innerHTML += "<br>"
    output2.innerHTML += xp3;
    output2.innerHTML += "<br>"
    output2.innerHTML += "yp3 = yp2 + l3 * sin(A4)";
    output2.innerHTML += "<br>"
    output2.innerHTML += yp3;
    output2.innerHTML += "<br>"
    console.log("A4");
    console.log(A4);
    console.log("xp3");
    console.log(xp3);
    console.log("yp3");
    console.log(yp3);
}