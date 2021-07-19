 var modalOpen          = false;
 var modalButtonLarge   = document.querySelector('#modal-button-large')
 var modalButtonSmall   = document.querySelector('#modal-button-small')
 var modalClose         = document.querySelector('#modal-close')
 var modalOverlay       = document.querySelector('#modal-overlay')
 var modalWrapper       = document.querySelector('.m-w')
 var sidebar     = document.querySelector("#sidebar")



 modalClose.addEventListener("click",()=>{
   
    if(modalOpen){

        modalOverlay.classList.add('modal-off')
        modalWrapper.classList.add('modal-off')
        modalOpen = false;
    
    }
    
})

modalButtonLarge.addEventListener('click', ()=>{
  
     if(!modalOpen){
 
        modalOverlay.classList.remove('modal-off') 
        modalWrapper.classList.remove('modal-off')
        modalWrapper.classList.add('modal-on')
        modalOverlay.classList.add('modal-on')
        modalOpen = true;  

    }
 
 })

modalButtonSmall.addEventListener('click', ()=>{
  
     if(!modalOpen){
 
        modalOverlay.classList.remove('modal-off') 
        modalWrapper.classList.remove('modal-off')
        modalWrapper.classList.add('modal-on')
        modalOverlay.classList.add('modal-on')
        modalOpen = true;  
 
    }

})

window.onscroll = function(){

    scrollTop = document.documentElement.scrollTop
  
    if(scrollTop < 4870 && scrollTop> 236){
  
        sidebar.classList.remove('top-anchor')  
        sidebar.classList.add('fixed-anchor')  
        sidebar.classList.remove('bottom-anchor')
  
    }else if(scrollTop<236){
  
        sidebar.classList.remove('fixed-anchor')
        sidebar.classList.add('top-anchor')
  
    }else{
     
        sidebar.classList.add('bottom-anchor')
        sidebar.classList.remove('fixed-anchor')
  
    }
  
  }