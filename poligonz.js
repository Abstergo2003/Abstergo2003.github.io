function poligonz() {
    var sB = document.getElementById("poligonz-sB").value;
    var x0 = document.getElementById("poligonz-x0").valueAsNumber;
    document.getElementById("x0").innerHTML = x0;
    var y0 = document.getElementById("poligonz-y0").valueAsNumber;
    document.getElementById("y0").innerHTML = y0;
    var x1;
    var y1;
    var x2;
    var y2;
    var x3;
    var y3;
    var x4;
    var y4;
    var x5;
    var y5;
    var x6;
    var y6;
    var A0 = document.getElementById("poligonz-A0").valueAsNumber;
    var mb = document.getElementById("poligonz-mb").valueAsNumber;
    var n = 6;
    var B0 = document.getElementById("poligonz-B0").valueAsNumber;
    document.getElementById("B0").innerHTML = B0;
    var B1 = document.getElementById("poligonz-B1").valueAsNumber;
    document.getElementById("B1").innerHTML = B1;
    var B2 = document.getElementById("poligonz-B2").valueAsNumber;
    document.getElementById("B2").innerHTML = B2;
    var B3 = document.getElementById("poligonz-B3").valueAsNumber;
    document.getElementById("B3").innerHTML = B3;
    var B4 = document.getElementById("poligonz-B4").valueAsNumber;
    document.getElementById("B4").innerHTML = B4;
    var B5 = document.getElementById("poligonz-B5").valueAsNumber;
    document.getElementById("B5").innerHTML = B5;
    var d0 = document.getElementById("poligonz-d0").valueAsNumber;
    document.getElementById("d0").innerHTML = d0;
    var d1 = document.getElementById("poligonz-d1").valueAsNumber;
    document.getElementById("d1").innerHTML = d1;
    var d2 = document.getElementById("poligonz-d2").valueAsNumber;
    document.getElementById("d2").innerHTML = d2;
    var d3 = document.getElementById("poligonz-d3").valueAsNumber;
    document.getElementById("d3").innerHTML = d3;
    var d4 = document.getElementById("poligonz-d4").valueAsNumber;
    document.getElementById("d4").innerHTML = d4;
    var d5 = document.getElementById("poligonz-d5").valueAsNumber;
    document.getElementById("d5").innerHTML = d5;
    var Bst = Math.PI * (n-2);
    var Bsp = B0 + B1 + B2 + B3 + B4 + B5;
    var fb = Bsp - Bst;
    var fbmax = mb * Math.sqrt(n);
    if (fb < fbmax) {
        console.log("dobrze");
    } else {
        console.log("kurwa");
    }
    var vk = -fb / n;
    B0 = B0 + vk;
    document.getElementById("Bp0").innerHTML = B0;
    B1 = B1 + vk;
    document.getElementById("Bp1").innerHTML = B1;
    B2 = B2 + vk;
    document.getElementById("Bp2").innerHTML = B2;
    B3 = B3 + vk;
    document.getElementById("Bp3").innerHTML = B3;
    B4 = B4 + vk;
    document.getElementById("Bp4").innerHTML = B4;
    B5 = B5 + vk;
    document.getElementById("Bp5").innerHTML = B5;
    if (sB == "p") {
        var A1 = A0 + Math.PI - B1;
        var A2 = A1 + Math.PI - B2;
        var A3 = A2 + Math.PI - B3;
        var A4 = A3 + Math.PI - B4;
        var A5 = A4 + Math.PI - B5;
        var A6 = A5 + Math.PI - B0;
    } else if (sB == "l") {
        var A1 = A0 - Math.PI + B1;
        var A2 = A1 - Math.PI + B2;
        var A3 = A2 - Math.PI + B3;
        var A4 = A3 - Math.PI + B4;
        var A5 = A4 - Math.PI + B5;
        var A6 = A5 - Math.PI + B0;
    } else {
        console.log("ty debilu miało być p albo l");
    }
    document.getElementById("A0").innerHTML = A0;
    document.getElementById("A1").innerHTML = A1;
    document.getElementById("A2").innerHTML = A2;
    document.getElementById("A3").innerHTML = A3;
    document.getElementById("A4").innerHTML = A4;
    document.getElementById("A5").innerHTML = A5;
    
    var dy0 = d0 * Math.sin(A0);
    document.getElementById("dy0").innerHTML = dy0;
    var dx0 = d0 * Math.cos(A0);
    document.getElementById("dx0").innerHTML = dx0;
    
    var dy1 = d1 * Math.sin(A1);
    document.getElementById("dy1").innerHTML = dy1;
    var dx1 = d1 * Math.cos(A1);
    document.getElementById("dx1").innerHTML = dx1;
    
    var dy2 = d2 * Math.sin(A2);
    document.getElementById("dy2").innerHTML = dy2;
    var dx2 = d2 * Math.cos(A2);
    document.getElementById("dx2").innerHTML = dx2;
    
    var dy3 = d3 * Math.sin(A3);
    document.getElementById("dy3").innerHTML = dy3;
    var dx3 = d3 * Math.cos(A3);
    document.getElementById("dx3").innerHTML = dx3;
    
    var dy4 = d4 * Math.sin(A4);
    document.getElementById("dy4").innerHTML = dy4;
    var dx4 = d4 * Math.cos(A4);
    document.getElementById("dx4").innerHTML = dx4;
    
    var dy5 = d5 * Math.sin(A5);
    document.getElementById("dy5").innerHTML = dy5;
    var dx5 = d5 * Math.cos(A5);
    document.getElementById("dx5").innerHTML = dx5;
    
    var fx = dx0 + dx1 + dx2 + dx3 + dx4 + dx5;
    var fy = dy0 + dy1 + dy2 + dy3 + dy4 + dy5;
    var fl = Math.sqrt(Math.pow(fx,2) + Math.pow(fy,2))
    var ds = d0 + d1 + d2 + d3 + d4 + d5;
    var flmax = ds/2000;

    dx0 = dx0 - (fx / ds) * d0;
    document.getElementById("dxw0").innerHTML = dx0;
    dy0 = dy0 - (fy / ds) * d0;
    document.getElementById("dyw0").innerHTML = dy0;
    
    dx1 = dx1 - (fx / ds) * d1;
    document.getElementById("dxw1").innerHTML = dx1;
    dy1 = dy1 - (fy / ds) * d1;
    document.getElementById("dyw1").innerHTML = dy1;
    
    dx2 = dx2 - (fx / ds) * d2;
    document.getElementById("dxw2").innerHTML = dx2;
    dy2 = dy2 - (fy / ds) * d2;
    document.getElementById("dyw2").innerHTML = dy2;
    
    dx3 = dx3 - (fx / ds) * d3;
    document.getElementById("dxw3").innerHTML = dx3;
    dy3 = dy3 - (fy / ds) * d3;
    document.getElementById("dyw3").innerHTML = dy3;
    
    dx4 = dx4 - (fx / ds) * d4;
    document.getElementById("dxw4").innerHTML = dx4;
    dy4 = dy4 - (fy / ds) * d4;
    document.getElementById("dyw4").innerHTML = dy4;
    
    dx5 = dx5 - (fx / ds) * d5;
    document.getElementById("dxw5").innerHTML = dx5;
    dy5 = dy5 - (fy / ds) * d5;
    document.getElementById("dyw5").innerHTML = dy5;
    
    x1 = x0 + dx0;
    document.getElementById("x1").innerHTML = x1;
    y1 = y0 + dy0;
    document.getElementById("y1").innerHTML = y1;
    
    x2 = x1 + dx1;
    document.getElementById("x2").innerHTML = x2;
    y2 = y1 + dy1;
    document.getElementById("y2").innerHTML = y2;
    
    x3 = x2 + dx2;
    document.getElementById("x3").innerHTML = x3;
    y3 = y2 + dy2;
    document.getElementById("y3").innerHTML = y3;

    x4 = x3 + dx3;
    document.getElementById("x4").innerHTML = x4;
    y4 = y3 + dy3;
    document.getElementById("y4").innerHTML = y4;

    x5 = x4 + dx4;
    document.getElementById("x5").innerHTML = x5;
    y5 = y4 + dy4;
    document.getElementById("y5").innerHTML = y5;

    x6 = x5 + dx5;
    document.getElementById("x6").innerHTML = x6;
    y6 = y5 + dy5;
    document.getElementById("y6").innerHTML = y6;

    console.log(x1);
    console.log(y1);
    console.log(x2);
    console.log(y2);
    console.log(x3);
    console.log(y3);
    console.log(x4);
    console.log(y4);
    console.log(x5);
    console.log(y5);
    console.log(x6);
    console.log(y6);
    console.log(fx);
    console.log(fy);
}