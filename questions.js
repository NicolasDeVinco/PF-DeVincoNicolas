(function(){
    const titleFaqs = [...document.querySelectorAll('.faqs__subtitle')];
    
    titleFaqs.forEach(faqs =>{
    faqs.addEventListener('click', ()=>{
        let height = 0;
        let answer = faqs.nextElementSibling;
        let addPadding = faqs.parentElement;
    
    addPadding.classList.toggle('faqs__questions--add');
    faqs.children[0].classList.toggle('faqs__arrow--rotate');
    
        if(answer.clientHeight === 0){
            height = answer.scrollHeight;
        }
    
        answer.style.height = `${height}px`;
    });
    });
    
    
    })();