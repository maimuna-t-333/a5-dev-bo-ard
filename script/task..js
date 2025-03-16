
document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('history').innerHTML = ''; 
});


const nextPage=document.getElementById('click-1').addEventListener('click',function(){
    window.location.href='second.html';
})

const previousPage=document.getElementById('click-2').addEventListener('click',function(){
    window.location.href='main.html';
})


