function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

docReady(function() {
    // DOM is loaded and ready for manipulation here
    let menu = document.querySelector(".menu");
    let menu_dd = document.querySelector("ul.appear");
    let check = 0;

    menu.addEventListener('click', function(e){
        if(check===0){
            menu_dd.style.display = "block";
        }
    })
});

