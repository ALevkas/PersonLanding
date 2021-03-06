const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        document.querySelector('.menu-wrap-toggler').checked = false;
        document.querySelector('.menu-wrap-toggler__hamburger');
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


//Отобразить - скрыть блок обо мне.
const item4 = document.querySelector('.header_item-4');
item4.addEventListener("click", function(event) {
    if (item4.classList.contains('showInfoItem-4')) {
        item4.classList.remove('showInfoItem-4');
        item4.classList.add('hiddenInfoItem-4');
    } else {
        item4.classList.remove('hiddenInfoItem-4');
        item4.classList.add('showInfoItem-4');
    }

})