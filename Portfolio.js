var tablinks = document.getElementsByClassName("links");
    var tabcontents = document.getElementsByClassName("contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active");
    }
    for(tabcontents of tabcontents){
            tabcontents.classList.remove("tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("tab")
}