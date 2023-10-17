window.addEventListener("scroll", setScrollVar);

function setScrollVar() {
    const percentScrolled = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100;
    console.log(percentScrolled);

    document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
}

setScrollVar();