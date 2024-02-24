var el= document.getElementById('test').children[4];
var totalprice= document.getElementById('totalprice');
var btn= document.getElementById('btn');

btn.addEventListener('click',function(){
    totalprice.innerHTML=parseInt(totalprice.innerHTML)+parseInt(el.innerHTML)
})