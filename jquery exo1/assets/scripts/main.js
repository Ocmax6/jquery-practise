$(window).ready(function () {
    $('div').append('<form>');
    $('div').prepend('<h1>', 'Hi, set all the information bellow!')
    $('form').attr('class', 'form')
    $('form').append('<input>');
    $('input').attr('id', 'name').attr('class', 'name').attr('placeholder', 'Enter your Username');
    $('form').append('<input>');
    $('input').last().attr('id', 'email').attr('class', 'email').attr('placeholder', 'Enter your Email');
    $('form').append('<textarea>');
    $('textarea').attr('placeholder', 'add comment').attr('id', 'comment');
    $('form').append('<button>');
    $('button').attr('class', 'button').attr('type', 'button');
    $('input').css({
        color: 'rgb(10, 177, 121)',
        display: 'block',
        padding: '4px 7px',
        margin: '14px 7px',
    })
    $('textarea').css({
        color: 'rgb(20, 151, 107)',
        display: 'block',
        padding: '4px 7px',
        margin: '14px 7px',
    })
    $('form').css({
        margin: '8px 10px',
        padding: '8px 10px',
    })
    $('button').css({
        color: 'rgb(10, 177, 121)',
        display: 'block',
        padding: '4px 7px',
        margin: '14px 7px',
        width: '40px',
        height: '15px',
    })
   })
//    let text = $('#comment').val();
//    let button = $('button').val();
//    if ($('textearea').val() == '' || $('email').val() == '' $('')) {
//        alert('re-check for submit information')
//    }
// //    $('button').click(function () {
//     if ($('#name').val() == '' || $('#email').val() == '' || $('#comment').val == '') {
//         alert('re-check and make sure that you are enter name and email')
//     }
