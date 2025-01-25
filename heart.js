let v  = document.getElementById('video');
let b = document.getElementById('b');

let a = 1;

b.addEventListener('click',()=>{
    if(a%2!=0){
        v.innerHTML = ' <video autoplay loop muted > <source src="Heart1.mp4" type="video/mp4"> </video>';
        a++;
    }
    else{
        v.innerHTML = ' <video autoplay loop muted > <source src="hi.mp4" type="video/mp4"> </video>';
        a++;
    }
   
})