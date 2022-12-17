function poligono() {
    var Ap;
    var x3 = document.getElementById("poligono-x3").valueAsNumber;
    document.getElementById("tpoligono-x3").innerHTML = x3;
    var y3 = document.getElementById("poligono-y3").valueAsNumber;
    document.getElementById("tpoligono-y3").innerHTML = y3;
    var x2 = document.getElementById("poligono-x2").valueAsNumber;
    document.getElementById("tpoligono-x2").innerHTML = x2;
    var y2 = document.getElementById("poligono-y2").valueAsNumber;
    document.getElementById("tpoligono-y2").innerHTML = y2;
    var radp = Math.atan(Math.abs((y2 - y3) / (x2 -x3)));
    if ((y2 - y3) >= 0) {
      if ((x2 - x3) > 0) {
        console.log("ćwiartka 1");
        Ap = radp;
      } else {
        console.log("ćwiartka 2");
        Ap = Math.PI - radp;
      }
    } else {
      if ((x2 - x3) < 0) {
        console.log("ćwiartka 3");
        Ap = Math.PI + radp;
      } else {
        console.log("ćwiartka 4");
        Ap = 2 * Math.PI - radp;
      }
    }
    
    var Ak;
    var x5 = document.getElementById("poligono-x5").valueAsNumber;
    document.getElementById("tpoligono-x5").innerHTML = x5;
    var y5 = document.getElementById("poligono-y5").valueAsNumber;
    document.getElementById("tpoligono-y5").innerHTML = y5;
    var x4 = document.getElementById("poligono-x4").valueAsNumber;
    document.getElementById("tpoligono-x4").innerHTML = x4;
    var y4 = document.getElementById("poligono-y4").valueAsNumber;
    document.getElementById("tpoligono-y4").innerHTML = y4;
    var radk = Math.atan(Math.abs((y4 - y5) / (x4 -x5)));
    if ((y4 - y5) >= 0) {
      if ((x4 - x5) > 0) {
        console.log("ćwiartka 1");
        Ak = radk;
      } else {
        console.log("ćwiartka 2");
        Ak = Math.PI - radk;
      }
    } else {
      if ((x4 - x5) < 0) {
        console.log("ćwiartka 3");
        Ak = Math.PI + radk;
      } else {
        console.log("ćwiartka 4");
        Ak = 2 * Math.PI - radk;
      }
    }
    var mb = document.getElementById("poligono-mb").valueAsNumber;
    var n = 3;
    var side = document.getElementById("poligono-side").value;
    console.log(Ap);
    console.log(Ak);
    sBt = Ak - Ap + n * Math.PI;
    var B2 = document.getElementById("poligono-B2").valueAsNumber;
    document.getElementById("tpoligono-B2").innerHTML = B2;
    var B3 = document.getElementById("poligono-B3").valueAsNumber;
    document.getElementById("tpoligono-B3").innerHTML = B3;
    var B4 = document.getElementById("poligono-B4").valueAsNumber;
    document.getElementById("tpoligono-B4").innerHTML = B4;
    var sBp = B2 +B3 + B4;
    var fb = sBp - sBt;
    var fbmax = mb * Math.sqrt(n)
    if (fb < fbmax) {
      console.log("dobrze");
    } else {
      console.log("kurwa");
    }
    var vk = -fb / n;
    B2 = B2 + vk;
    document.getElementById("tpoligono-B2p").innerHTML = B2;
    B3 = B3 + vk;
    document.getElementById("tpoligono-B3p").innerHTML = B3;
    B4 = B4 + vk;
    document.getElementById("tpoligono-B4p").innerHTML = B4;
    if (side == "p") {
      var A1 = Ap + Math.PI - B2;
      var A2 = A1 + Math.PI - B3;
      var A3 = A2 + Math.PI - B4;
    } else if (side == "l") {
      var A1 = Ap + B2 - Math.PI;
      var A2 = A1 + B3 - Math.PI;
      var A3 = A2 + B4 - Math.PI;
    } else {console.log("ty idioto miało być p albo l")}
    console.log(A3);
    document.getElementById("tpoligono-Ap").innerHTML = Ap;
    document.getElementById("tpoligono-A1").innerHTML = A1;
    document.getElementById("tpoligono-A2").innerHTML = A2;
    document.getElementById("tpoligono-Ak").innerHTML = Ak;

    var d1 = document.getElementById("poligono-d1").valueAsNumber;
    document.getElementById("tpoligono-d1").innerHTML = d1;
    var d2 = document.getElementById("poligono-d2").valueAsNumber;
    document.getElementById("tpoligono-d2").innerHTML = d2;

    var dx1 = d1 * Math.cos(A1);
    document.getElementById("tpoligono-dx1").innerHTML = dx1;
    var dy1 = d1 * Math.sin(A1);
    document.getElementById("tpoligono-dy1").innerHTML = dy1;
    var dx2 = d2 * Math.cos(A2);
    document.getElementById("tpoligono-dx2").innerHTML = dx2;
    var dy2 = d2 * Math.sin(A2);
    document.getElementById("tpoligono-dy2").innerHTML = dy2;
    var sdxp = dx1 + dx2;
    var sdyp = dy1 + dy2;
    var sdxt = x5 - x2;
    var sdyt = y5 - y2;
    var fx = sdxp - sdxt;
    var fy = sdyp - sdyt;
    var sd = d1 + d2;
    dx1 = dx1 + (-fx / sd) * d1;
    document.getElementById("tpoligono-dx1p").innerHTML = dx1;
    dy1 = dy1 + (-fy / sd) * d1;
    document.getElementById("tpoligono-dy1p").innerHTML = dy1;
    dx2 = dx2 + (-fx / sd) * d2;
    document.getElementById("tpoligono-dx2p").innerHTML = dx2;
    dy2 = dy2 + (-fy / sd) * d2;
    document.getElementById("tpoligono-dy2p").innerHTML = dy2;
    var x600 = x2 + dx1;
    document.getElementById("tpoligono-x600").innerHTML = x600;
    var y600 = y2 + dy1;
    document.getElementById("tpoligono-y600").innerHTML = y600;
    var xs = x600 + dx2;
    var ys = y600 + dy2;
    console.log(x600);
    console.log(y600);
    console.log(xs);
    console.log(ys);
}