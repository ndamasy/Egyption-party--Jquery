/// <reference types="../@types/jquery"/>



// $('section').animate( {width:'100%' } , 1000)
// $('section').animate( {height:'100vh' } , 1000 , function(){
//     $('h2').slideDown( 1500 , function(){
//         $('p').slideDown( 1500  , function(){
//             $('.item').slideDown(1500)
//         });
           
       
//     });
// })



// $('.img').on('click' , function(e){
//     let imgSrc= $(e.target).attr('src');
//     let mainSrc = $('.mainImg').attr('src');

//     $('.mainImg').attr('src' , imgSrc);
//     $(e.target).attr('src' , mainSrc);
// })




let aboutOffset=$('#about').offset().top;
$('window').on('scroll' , function(){
let wScroll=$('window').scrollTop();
if(wScroll>aboutOffset - 60){
    $('.navbar').css({backgroundColor:'red'})
}else{
    $('.navbar').css({backgroundColor:'transparent'})
}
})