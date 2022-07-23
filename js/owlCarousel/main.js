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


//Modal da descrição//

const openModalDescricao = () => {
    const overlay = document.getElementById("modal-descricao");
    const modal = document.getElementById("modal-content-descricao");
    overlay.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}

const closeModalDescricao = (event) => {
    let overlay = document.getElementById("modal-descricao");
    let modal = document.getElementById("modal-content-descricao");

    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, false);
    }
}


//Modal do trailer//

$(document).ready(function() {
    var url = $("#myVideo").attr('src');
    $("#myModal").on('hide.bs.modal', function() {
        $("#myVideo").attr('src', '');
    });
    $("#myModal").on('show.bs.modal', function() {
        $("#myVideo").attr('src', url);
    });
});

const js = jQuery.noConflict();

	js(document).on('click', '.close', function () {
		console.log('olá')
		js("#myVideo").attr("src", js("#myVideo").attr("src"));

	});

//modal trailer Era de Ultron

$(document).ready(function(){
    
    var url = $("#myVideo1").attr('src');
    $("#myModal").on('hide.bs.modal', function(){
        $("#myVideo1").attr('src', '');
    });
    $("#myModal").on('show.bs.modal', function(){
        $("#myVideo1").attr('src', url);
    });
  });

const js1 = jQuery.noConflict();

	js1(document).on('click', '.close', function () {
		js1("#myVideo1").attr("src", js2("#myVideo1").attr("src"));
	});

  //modal enredo Era de Ultron

  const openModalDescricaoUltron = () => {
    const overlay = document.getElementById("modal-descricao-2");
    const modal = document.getElementById("modal-content-descricao-2");
    overlay.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}

const closeModalDescricaoUltron = (event) => {
    const overlay = document.getElementById("modal-descricao-2");
    const modal = document.getElementById("modal-content-descricao-2");

    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, false);
    }
}

//Modal Trailer Homem-Aranha Sem Volta para Casa

$(document).ready(function() {
    var url = $("#myVideo2").attr('src');
    $("#myModal").on('hide.bs.modal', function() {
        $("#myVideo2").attr('src', '');
    });
    $("#myModal").on('show.bs.modal', function() {
        $("#myVideo2").attr('src', url);
    });
});

js = jQuery.noConflict();

	js(document).on('click', '.close', function () {
		js("#myVideo2").attr("src", js("#myVideo2").attr("src"));
	});

//Modal Enrendo Homem-Aranha Sem Volta para Casa


const openModalDescricaoAranhaSem = () => {
    let overlay = document.getElementById("modal-descricao-3");
    let modal = document.getElementById("modal-content-descricao-3");
    overlay.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}

const closeModalDescricaoAranhaSem = (event) => {
    let overlay = document.getElementById("modal-descricao-3");
    let modal = document.getElementById("modal-content-descricao-3");

    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, false);
    }
}