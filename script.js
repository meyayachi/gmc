var el= document.getElementsByClassName('btn');
var totalprice = document.getElementById('totalprice');
var removeButtons = document.getElementsByClassName('btn');
var totalprice = document.getElementById('totalprice');
case 1: ( let e of el)
{
    e.addEventListener('click',function(){
       totalprice.innerHTML=parseInt(e.parentElement.children[4].innerHTML) + parseInt(totalprice.innerHTML)
    })
}
case 2: (let btn of removeButtons) {
    btn.addEventListener('click', function() {
        var itemPrice = parseInt(btn.parentElement.children[5].innerHTML);
        var currentTotal = parseInt(totalprice.innerHTML);
        totalprice.innerHTML = currentTotal - itemPrice; 
    }

