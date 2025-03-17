const testimonials = [
  {
    "id": 1,
    "username": 'BRM',
    "text": 'life is a peaceful paradox',
    "image": "images. jpeg",
  },
  {
    "id": 2,
    "username": 'john',
    "text": 'life is a dangerous',
    "image": "images22.jpeg",
  },
  {
    "id": 3,
    "username": 'kaine',
    "text": 'life is a simple',
    "image": "download.jpeg",
  },
  {
    "id": 4,
    "username": 'roman',
    "text": 'life is mystery',
    "image": "ffffff.jpeg",  
  },
  {
    "id": 5,
    "username": 'batista',
    "text": 'life is a nothing',
    "image": "45c3.png",   
  }
]

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updatetestimonial();

function updatetestimonial()
{
  const {id,name,text,image}= testimonials[idx]
  imgE1.src = image
  textE1.textHTML = text
  usernameE1.textHTML = name
  idx++
  if (idx === testimonials.length) {
    idx = 0
  }
 
  setTimeout(
    ()=>{
        updatetestimonial()
     }
    , 1000)
}
