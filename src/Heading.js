import react from "react";
import { greeting, textcolours } from "./Display";


function Heading() {

   return (
          <>
                    <div className = "h1" >

                    <br></br>

                    <h1>Hello Budy...!! 🖐 </h1>

                    <h1 style = {textcolours}> {greeting}</h1>

                    <h1>"How are You..?"</h1>

                    <h1>😃</h1>

                   <br></br>

                   </div> 
          </>
   ); 
}

export default Heading;