var t = setInterval(move, 20);
var t2 = setInterval(parpadea, 10);

var pos = 0;

var box = document.getElementById("box");
var box2 = document.getElementById("box2");


function move() {
    console.log(pos);
    pos += 1;
    box.style.left = pos + "px";
    box.style.top = pos + "px";

    box2.style.left = pos + "px";
    box2.style.top = 150 - pos + "px";
    if (pos == 150) pos = 0;
    if (pos == 75) {
        box.style.background = green;
        box2.style.background = green;
    }
}

function move2() {
    if (pos >= 150) {
        clearInterval(t);
    }
    else {
        pos += 1;
        box.style.left = pos + "px";
        box.style.top = pos + "px";
    }
}

var count = 0;
function parpadea() {
    count +=1;
    console.log(count);
    if(count <= 20){
        box.style.opacity = 1-(count/20);
    }
    if(count > 20){
        box.style.opacity = ((count-20)/20)
    }

    if(count == 40) {count = 0;}
}
