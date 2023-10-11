const body = document.body,
    root = document.querySelector("#root"),
    hex = document.createElement("div"),
    colorBlockWrapper = document.createElement("div"),
    alertPopup = document.createElement("div"),
    button = document.createElement("button"),
    buttonText = "Another color",
    defaultColor = "#F0C808";

render();
hex.addEventListener("click", copyHex);
button.addEventListener("click", newColor);

function render() {
    hex.classList.add("color-block__hex");
    hex.innerHTML = defaultColor;
    colorBlockWrapper.classList.add("color-block");
    alertPopup.classList.add("popup");
    button.innerHTML = buttonText;
    button.classList.add("color-block__btn");
    root.append(colorBlockWrapper, alertPopup);
    colorBlockWrapper.append(hex, button);
}

function newColor() {
    let color;
    const symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    body.style.background = color;
    hex.innerHTML = color;
    alertPopup.classList.remove('active');
}

function copyHex() {
    let textArea = document.createElement("textarea");
    textArea.value = hex.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alertPopup.classList.add("active");
    alertPopup.innerText = `Color ${hex.innerText} copied in clipboard`;
    setTimeout("alertPopup.classList.remove('active')", 1500);
}