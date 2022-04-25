$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function openModal(modalname){
    let modal = document.getElementById(modalname);

    if(typeof modal == 'undefined' || modal ===null)
        return;
        modal.style.display = "block"
        document.body.style.overflow = 'hidden'
}

function closeModal(modalname){
    let modal = document.getElementById(modalname);

    if(typeof modal == 'undefined' || modal ===null)
        return;
        modal.style.display = "none"
}