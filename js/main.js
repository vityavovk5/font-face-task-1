function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$("#my-button").hover(function () { 
    $(this).css({
        top: getRandomInt(0, 200)+"px",
        left: getRandomInt(0, 1100)+"px"
    });
}, function () { });