const target = document.getElementById('target');
let yes = document.getElementById('yes');
let par = document.getElementById('par');
let im = document.getElementById('im');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');



let arr = [`Please think again!`,`Ek baar aur soch lo !`,`Baby Maan jao na ! Kitna bhav khaogi !`];

let brr = ['https://i.pinimg.com/originals/3c/eb/bf/3cebbfcbcba863b3fcc2b406588beba5.gif','https://media.tenor.com/zKiiV8DZVhcAAAAM/peach-goma.gif','https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGVtbjc4MTA2a2J4aHg2Nnk5cXd4NzQwb2VtcnFzZXRyenJiNWhuZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W5aG2ZXhxF4l0Z9Iha/giphy.webp'];
console.log(arr[0]);
console.log(arr[2]);

function yes1(){
    par.innerHTML = "Yes i knew ! I love you too.❤️ ";
    im.innerHTML = `<img src="https://i.pinimg.com/originals/fb/01/f8/fb01f80c2696f653791cbfc8e390a859.gif" alt="reload">`
}
function sendEmail() {
    // Replace with your actual email address and subject
    var mailtoOptions = {
      to: 'sandeep231ee@gmail.com',
      subject: 'Please Write Something . And send me..',
      body: 'Hi,'
    };
  
    var mailtoLink = 'mailto:' + mailtoOptions.to + '?subject=' + encodeURIComponent(mailtoOptions.subject) + '&body=' + encodeURIComponent(mailtoOptions.body);

    window.location.href = mailtoLink;
  }
  


yes.addEventListener('click',()=>{
    yes1();
    window.alert("I love you too. :) ❤️❤️");
    sendEmail();
    
})

function moveTarget(){
    const maxWidth = 200;
    const maxHeight = 200;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';
}
let p =0;

function text(){
    if(p<arr.length){
   for(let i =0;i<arr.length;i++){
    par.innerHTML = arr[p];
    im.innerHTML = `<img src="${brr[p]}" alt="reload">`
    p = p+1;
    break;
   }
 }
}

function me(){
        b1.innerHTML = '<button>Click Me</button>';
        b2.innerHTML = '<button>See My Heart</button>';
    
}

target.addEventListener('click',function(){
   
    if(p==arr.length){
     me();
     p++;
     moveTarget();
    }
    else{
        moveTarget();
        text();
    }
})

b2.addEventListener('click',function(){
    // window.location.href = "heart.html";
    window.open("heart.html", "_black")
})
b1.addEventListener('click',function(){
    // window.location.href = "sorry.html";
    window.open("sorry.html", "_black");
})







