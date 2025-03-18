let cartcount=0;

const a=document.getElementById("addtocart");
const b=document.getElementById("cartcount");
const c=document.getElementById("clearcart");

a.addEventListener('click',() =>{
  cartcount++;
  b.innerHTML= cartcount;
  });


c.addEventListener('click',() => {
    cartcount=0;
    b.textContent = cartcount;
    });