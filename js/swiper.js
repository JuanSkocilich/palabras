const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: "auto", // Cantidad de slides que se muestra por pantalla
    spaceBetween: 15, // Espacio entre slide
    slidesPerGroupAuto: true, // Pasar slides por grupo
    direction: 'horizontal',
    // loop: true,
    allowTouchMove: true, // Permite que sea arrastrable con el mouse
    //effect: "fade", // Efecto al cambiar de slider
    autoplay: false,
    /* autoplay: { // Permite que el slider cambie automaticamente
        delay: 4000, // Segundos al cambiar
        // pauseOnMouseEnter: true, // Hace que el slider pare cuando el mouse pase por arriba
        // disableOnInteraction: false, // Una vez que el mouse ya no este el contacto con el slider, este mismo siguira pasando
    }, */

    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
        // type: "progressbar", // Tipo de paginacion
        clickable: true, // Permite la paginacion
        dynamicBullets: true, // Le da estilos a la paginacion
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Permite arrastrar la barra
    },
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true, // Permite que sea arrastrable con el mouse
    effect: "fade", // Efecto al cambiar de slider
    autoplay: { // Permite que el slider cambie automaticamente
        delay: 3000, // Segundos al cambiar
        // pauseOnMouseEnter: true, // Hace que el slider pare cuando el mouse pase por arriba
        // disableOnInteraction: false, // Una vez que el mouse ya no este el contacto con el slider, este mismo siguira pasando
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination2',
        //type: "progressbar", // Tipo de paginacion
        clickable: true, // Permite la paginacion
        // dynamicBullets: true, // Le da estilos a la paginacion
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Permite arrastrar la barra
    },
});

