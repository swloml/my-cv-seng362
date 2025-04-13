document.getElementById("profile-pic").onclick = function () {
    alert("You clicked the profile picture!");
    document.body.style.backgroundColor = "#e0f7fa";
};

document.getElementById("name").onmouseover = function () {
    this.style.color = "#C0F5B6";
};

function highlightSection(element) {
    element.classList.toggle("highlighted");
}

function enlargeText(paragraph) {
    paragraph.classList.toggle("large-text");
}

function toggleSection(header) {
    const content = header.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function enlargeText(paragraph) {
    paragraph.classList.toggle("large-text");
}

document.getElementById("profile-pic").onclick = function () {
    alert("You clicked on the profile picture!");
    document.body.style.backgroundColor = "#e0f7fa";
};

document.getElementById("profile-pic").onclick = function () {
    this.style.transition = "transform 0.6s";
    this.style.transform = "rotate(360deg)";
    document.body.style.backgroundColor = "#e0f7fa";
};


window.onscroll = function () {
    if (window.scrollY > 100) {
        console.log("Welcome to my personal page!");
    }
};