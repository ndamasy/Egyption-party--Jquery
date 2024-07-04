


$('.open-btn').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.side-bar ul').animate({ left: 0 }, 1000)

    $(this).animate({ left: $(".side-bar ul").outerWidth() + 10 }, 1000)
    // $('.head-text').animate({left: $(".side-bar ul").outerWidth() + 10}, 1000)

})


$('.side-link').on('click', function (e) {
    let href = $(e.target).attr('href');
    // console.log(e.target)
    let secOffset = $(href).offset().top;
    // console.log(secOffset)
    $('body').animate({ scrollTop: secOffset }, 2000);
    //ليه الكود ده مش شغال ؟؟
})

$('.fa-xmark').on('click', function () {
    $('.side-bar ul').animate({ left: -$(".side-bar ul").outerWidth() }, 1000)
    $(".open-btn").animate({ left: "10px" }, 1000)
})


$('.singer-1').on('click', function (e) {
    $('.song-1').slideToggle(500);

})
$('.singer-2').on('click', function (e) {
    $('.song-2').slideToggle(500);

})
$('.singer-3').on('click', function (e) {
    $('.song-3').slideToggle(500);

})
$('.singer-4').on('click', function (e) {
    $('.song-4').slideToggle(500);

})



let time = new Date(' Dec 31, 2025 23:59:59').getTime();

$(document).ready(function () {
    let countDown = setInterval(function () {
        let currentDate = new Date().getTime();
        let leftTime = time - currentDate;
        let day = Math.floor(leftTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let meniets = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((leftTime % (1000 * 60)) / (1000));
        $('.cont-1').text(day+'D');
        $('.cont-2').text(hours+'h');
        $('.cont-3').text(meniets+'m');
        $('.cont-4').text(seconds+'s');
        if (leftTime < 0) {
            clearInterval(countDown)
        }

    }, 1000)
});
