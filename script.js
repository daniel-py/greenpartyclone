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
    let menu = document.querySelector("ul.appear > i");
    let menu_dd = document.querySelector("ul.appear > div");
    let check = 0;

    menu.addEventListener('click', function(e){
        if(check == 0){
            console.log("clicked on");
            menu_dd.style.display = "block";
            //menu.style.color = "green";
            check = 1;
        } else {
            console.log("clicked off");
            menu_dd.style.display = "none";
            //menu.style.color = "#52df00";
            check = 0;
        }
    })
});

