const card = document.querySelector('.card');


const options = {

};

const observer = new IntersectionObserver((entries,appearOnScroll) => {
 
  entries.forEach(entry =>{
    console.log(entry.target);
    if(!entry.isIntersecting){
      return;
    }
    else {
        entry.target.classList.add('transition');
        observer.unobserve(entry.target);
    } 
  })
}, options);


observer.observe(card);