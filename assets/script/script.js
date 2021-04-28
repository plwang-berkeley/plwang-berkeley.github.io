let counter = 0;

document.getElementById("cakeTitle").onclick = () => {
    let background = document.getElementById("background")
    if (counter == 0) {
        counter = 1;
        background.style.backgroundColor = "#EF476F";
    } else {
        counter = 0;
        background.style.backgroundColor = "#FFF5ED";
    }
}