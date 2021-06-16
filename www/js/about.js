function bigImg(img) {
    img.style.width = "400px";
}

function normalImg(img) {
    img.style.width = "200px";
}

function display(img, name, x, y) {
    document.getElementById("dis_img").src = img;
    document.getElementById("text").innerHTML = y;
    document.getElementById("name").innerHTML = name;
    document.getElementById("p").innerHTML = x;
}
