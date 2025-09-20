import React from 'react'

const App = () => {
  return (
    <div>
     <h4> React URL shortner page</h4> 
     <br/>
     <input type="text"placeholder="Enter Your URL"/>
     <button > Shotner button</button>
     <h2> Your Shotner url is </h2>

     let   url = "http://20.244.56.144/evaluation-service/auth"
     let data =  url.split("/");
     
     const shortUrl=data[3]+data[4]+data[5];
      //console.log(shortUrl);
     // eslint-disable-next-line no-undef
     const finalUrl= "http://Localhost:3000/"+shortUrl;
     console.log(finalUrl);
     <h2> shortUrl("http://20.244.56.144/evaluation-service")</h2>
     
       

     

      
    </div>
  )
}

export default App
