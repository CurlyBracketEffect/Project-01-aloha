$(document).ready(function(){

    $('.main-carousel').flickity({
        cellAlign: 'left',
        wrapAround: true,
        prevNextButtons: false
    });

});

function buttonClick(){
    window.alert("Thank you for Subscribing");
}

function addToCart(){
    var cartItems = document.getElementById('cartItems');
    cartItems.setAttribute("style", "display:block");
    var number = parseInt(cartItems.innerHTML);
    ++number;
    cartItems.innerHTML = number;
}
var marginY= 0;
var destination = 0;
var speed = 5;
var scroller = null;
var windowScrollTop =0;

function initScroll(elementId){
    destination = document.getElementById(elementId).offsetTop;
    destination = destination - 102;

    scroller = setTimeout(function(){
        initScroll(elementId);
    }, 1);

    marginY = marginY + speed;

    if(marginY>=destination){
        clearTimeout(scroller);
        marginY = 0;
    }
    if(marginY!=0){
    window.scroll(0, marginY);}
{

}
}