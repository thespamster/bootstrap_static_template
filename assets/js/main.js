document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is fully loaded");
    window.scrollTo(0,0);
    document.getElementById("press-ham").addEventListener("click", function() {
        console.log('pressed ham');
        document.getElementById("toggle-ham").classList.toggle("d-none");
    });
});
