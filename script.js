var el= document.getElementsByClassName('btn');
var totalprice = document.getElementById('totalprice');
for ( let e of el)
{
    e.addEventListener('click',function(){
       totalprice.innerHTML=parseInt(e.parentElement.children[4].innerHTML) + parseInt(totalprice.innerHTML)
    })
}
