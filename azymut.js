function azymut () {
    var x1 = 126.30;
    var y1 = 142.85;
    var x2 = 44.60;
    var y2 = 208.90;
    var A;
    var rad = Math.atan(Math.abs((y2 - y1) / (x2 -x1)));
    var grad = (rad * 200) / (Math.PI);
    console.log(rad);
    console.log(grad);
    if ((y2 - y1) >= 0) {
        if ((x2 - x1) > 0) {
            console.log("ćwiartka 1");
            A = grad;
        } else {
            console.log("ćwiartka 2");
            A = 200 - grad;
        }
    } else {
        if ((x2 - x1) < 0) {
            console.log("ćwiartka 3");
            A = 200 + grad;
        } else {
            console.log("ćwiartka 4");
            A = 400 - grad;
        }
    }
    console.log(A);
}