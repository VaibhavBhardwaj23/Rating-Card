const butt=document.querySelector('.sub ');
const con=document.querySelector('.container');
const two=document.querySelector('.two');
const rating=document.querySelectorAll('.num');
const selected=document.querySelector('#content--1');
const selected2=document.querySelector('#content--2');
const selected3=document.querySelector('#content--3');
const selected4=document.querySelector('#content--4');
const selected5=document.querySelector('#content--5');
const display=document.querySelector('.content');

let color=" hsl(25, 97%, 53%)";


let newRating =0;

selected.addEventListener('click',()=>{
  newRating =1;
  console.log(newRating);
})
selected2.addEventListener('click',()=>{
    newRating =2;
    console.log(newRating);
  })
selected3.addEventListener('click',()=>{
    newRating =3;
    console.log(newRating);
  })
selected4.addEventListener('click',()=>{
    newRating =4;
    console.log(newRating);
  })
selected5.addEventListener('click',()=>{
    newRating =5;
    console.log(newRating);
  })
  butt.addEventListener('click',()=>{
    if(newRating!=0){
      con.classList.add('hidden');
      two.classList.remove('hidden');
      display.textContent=`You selected ${newRating} out of 5`


    }
     else{
        alert('please rate:(')
     }
  })