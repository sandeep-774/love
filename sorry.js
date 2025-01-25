let bt = document.getElementById('bt');
let im = document.getElementById('im');
// let mess = document.getElementById('mess');

let a = 0;
bt.addEventListener('click', ()=>{
    if(a==0){
    im.innerHTML = '<img src="https://media.tenor.com/i1oIl6vHVIoAAAAi/sseeyall-bubu-dudu.gif" alt="ugyg">';
    mess.innerHTML = '    Acchi Bachiii... 🖤🖤🖤🖤🖤';
    a++;
    }
    else{
        window.location.href = "https://www.google.com";
    }
})


