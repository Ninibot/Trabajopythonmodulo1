$(document).ready(function() {
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        if ($(window).scrollTop() >10){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

    });

    $('.products').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});
$("#formValidation").validate({
    rules:{
        nombre:{
            minlength: 3
        },
        email:{
            email:true
        },
        telefono:{
            number:true,
            minlength:9,
            maxlength:9
        },
        mensaje:{
            minlength:30
        }
    },
    messages:{
        nombre:{
            required: "Por favor ingresa tu nombre",
            minlength:"Nombre de al menos 3 letras"
        },
        email:"Por favor ingresa tu correo electrónico",
        telefono:"Por favor ingresa tu teléfono",
        mensaje:"Por favor ingresa tu mensaje"
    },


    submitHandler: function(form) {
    form.submit();
    }
});