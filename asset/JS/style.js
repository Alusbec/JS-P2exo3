var num=0

function changer() {
if (num == 0) {
num = 1;
document.image.src = "asset/img/JCD.jpeg";// grande image
document.image.width = 400;
document.image.height = 388;
}
else {
num = 0;
document.image.src = "asset/img/JCD.jpeg";// petite image
document.image.width = 200;
document.image.height = 194;
}
}