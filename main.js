function cl(){
    alert("<3");
}
function oo(){
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('mouse').style.left = x + 'px';
    document.getElementById('mouse').style.top = y + 'px';
}
