

// function passName(name){
//     console.log(name);
// }
// passName("Max");


// $('div').not('.second').click(function(){
//     $(this).css({
//         'color' : 'green',
//         'fontSize' : '34px',
//     });
// })

// console.log('You are clicked div');

// $(document).ready(function(){
//     $('h1').last().hide();
//     $('button').click(function(){
//         if($('#name').val()=='' || $('#email').val()==''){
//             alert('re-check and make sure you enter name and email');
//         }else{
//             $('h1').first().hide();
//             let name=$('#name').val();
//             let email=$('#email').val();
//             $('.name').html(name);
//             $('.email').html(email);
//             $('h1').last().show();
//         }
//     });
// })

$(document).ready(function(){
    $('h1').last().hide();
    $('button').click(function(){
        if($('#name').val() == '' || $('#email').val() == ''){
            alert('re-check and make sure that you are enter name and email')
        } else {
            $('h1').first().hide();
            let name = $('#name').val();
            let email = $('#email').val();
            $('.name').html(name);
            $('.email').html(email);
            $('h1').last().show();
            
        }
    
    });
 
})











































