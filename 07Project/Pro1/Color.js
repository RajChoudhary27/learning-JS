const buttons=document.querySelectorAll('.button');
console.log(buttons);
const body=document.querySelector("body")
buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function (e){
   console.log(e)
   console.log(e.target)
 
  switch(e.target)
  {
    case 'grey':
      body.style.backgroundColor=e.target.id;
      case 'white':
        body.style.backgroundColor=e.target.id;case'yellow':
        body.style.backgroundColor=e.target.id;
        case 'blue':
          body.style.backgroundColor=e.target.id;
        default:
          body.style.backgroundColor=e.target.id; 
  }
  })
});
