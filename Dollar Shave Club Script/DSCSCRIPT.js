var subHeader = document.querySelector('.css-9whu1j')
var getStartedButton = document.querySelector('.css-pyqqhw')
var goHomeButton = document.querySelector('.ui-v-align__container')
let currentUrl = location.href


const buttonCheckFunction = ()=>{

    console.log("BLOG")


    let goHomeButtonCheckLoop = setInterval(()=>{

        getStartedButton = document.querySelector('.css-pyqqhw')
  
        if(getStartedButton == null ){
    
            console.log("getStarted Doesn't Exist...")

            clearInterval(goHomeButtonCheckLoop)

            let homeButtonLoop =  setInterval(()=>{

                goHomeButton = document.querySelector('.ui-v-align__container')
        
                if(goHomeButton ==null ){
        
                    console.log("goHomeButton Doesn't Exist...")        
           
               }else{

                    console.log("goHomeButton Does Exist...")

                    clearInterval(homeButtonLoop)
        
                        setTimeout(function(){

                            goHomeButton.click((event)=>{

                                //console.log(event)

                            })

                            clearInterval(homeButtonLoop)

                            setTimeout(function(){
        
                                window.stop()

                            },2000)
           
                   },2000)
           
               }
        
            },100)
        
        }else{
    
            console.log("getStartedButton Does Exist...")

            checkExistence()

            clearInterval(goHomeButtonCheckLoop)

            setTimeout(()=>{

                getStartedButton.click()

                let homeButtonCheck =  setInterval(()=>{

                    goHomeButton = document.querySelector('.ui-v-align__container')
            
                    if(goHomeButton ==null ){
            
                        console.log("getHomeButton Doesn't Exist...")            
               
                   }else{

                    clearInterval(homeButtonCheck)
            
                       setTimeout(function(){

                           goHomeButton.click((event)=>{

                               console.log("cliekc",event)

                           })

                           clearInterval(homeButtonCheck)

                           setTimeout(function(){
            
                               window.stop()

                           },2000)
               
                       },2000)
               
                   }
            
                },100)

            },2000)
    
        }
    

    
    },100)



}

const checkExistence = () => {

    

    setInterval(()=>{

                

    })

    let refreshIntervalId = setInterval(()=>{

        header = document.querySelector('.css-4rbku5')
        subHeader = document.querySelector('.css-9whu1j')


        if(header == null && subHeader ==null){
        
            //console.log("Not ready yet")

            

        }else{

            console.log(header)
            header.textContent = "Widerfunnel"
            subHeader.textContent = "We are here to help you with         experimentation."
            clearInterval(refreshIntervalId)

        }

    },100)


}

buttonCheckFunction()


    document.body.addEventListener('click',checkExistence)
    document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("READY!!")

});