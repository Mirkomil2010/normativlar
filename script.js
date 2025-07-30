function scrollToHeader() {
    const header = document.getElementById("pageHeader");
    if (header) {
        header.scrollIntoView({ behavior: "smooth" });
    }
}