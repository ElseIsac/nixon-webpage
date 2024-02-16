
document.getElementById("menu").addEventListener('click', function () {
    console.log("hiiiiiiiis");
    displayMenu('mainSectionId', 'sectionMenu');

    displayMenu("navbar2", 'navbarMenu');
    setid();
})
function displayMenu(elementId, className) {
    var section2 = document.getElementById(elementId);
    console.log("inside the function", section2);
    if (section2.classList.contains(className)) {
        section2.classList.remove(className);
    } else {
        section2.classList.add(className);
    }
}
function setid() {
    console.log("inside set id function")
    var dropdownid = document.getElementById("newid");
    console.log("newid", dropdownid);

    dropdownid.classList.remove(".mega-menu");
    dropdownid.classList.remove(".dropdown-content");
    dropdownid.setAttribute("id", "multiCollapseExample1");
    dropdownid.classList.add("mega-menu1")

}

// function menuShow(elementId,,class) {
//     var navbarmenu = document.getElementById(elementId);
//     if (navbarmenu.classList.contains(className)) {
//         navbarmenu.classList.remove(className);
//     } else {
//         navbarmenu.classList.add(className);
//     }
// }