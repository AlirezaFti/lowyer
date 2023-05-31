var navigation = document.getElementById("navbar");

window.onscroll = function () {
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
        navigation.classList.add("scrolled");
        navigation.classList.add("navbar-light");
        navigation.classList.remove("navbar-dark");
    } else {
        navigation.classList.remove("scrolled");
        navigation.classList.remove("navbar-light");
        navigation.classList.add("navbar-dark")
    }
};