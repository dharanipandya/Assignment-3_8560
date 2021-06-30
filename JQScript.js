
$(document).ready(function(){

$('.btn').click(function(){
    var input = $('.add').val();

    $('ul').append('<li>' + input + ' <i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>');
    $('.add').val('');
})

$('ul').on('click', '.fa-trash', function(){
    $(this).parent('li').fadeOut();
})

$('ul').on('click', '.fa-check', function(){
    $(this).parent('li').toggleClass('checked');
    $(this).parent('li').find('.fa-check').toggleClass('fa-undo');
    
})

})
