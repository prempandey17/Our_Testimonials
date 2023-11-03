import React, { useState } from "react";
import Card from './Card';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';

const Testimonials= (props) => {
    
    let reviews=props.reviews;
    // also use big bracket to slove to kept variable and methods  
    const [index,setIndex]=useState(0);
 
       function leftShifthandler() {
           if((index-1)<=0){
             setIndex(reviews.length-1);
           } else {
             setIndex(index-1);
           }

       }

       function rightShiftHandler() {
           if(index+1 >= reviews.length) {
              setIndex(0);
           } else {
             setIndex(index+1);
           }
       }

       function surpriseHandler() {
         let randomIndex=Math.floor(Math.random() * reviews.length);
         setIndex(randomIndex);
       }

    
    return(
      <div className="w-[85vw] md:w-[700px] bg-white flex flex-col 
        justify-center mt-10 p-10 transition-all duration-700
         hover:shadow-xl rounded ">
        <Card review={reviews[index]}></Card>
        <div className="flex justify-center text-3xl mt-9 gap-3 text-violet-400 font-bold ">
            <button onClick={leftShifthandler}
                className="cursor-pointer hover:text-violet-500"><AiOutlineArrowLeft/></button>
            <button onClick={rightShiftHandler}
               className="cursor-pointer hover:text-violet-500"><AiOutlineArrowRight/></button>
         </div>

         <div >
            <button  onClick={surpriseHandler}
               className="bg-violet-400 hover:bg-violet-500 
             transition-all duration-200 cursor-pointer px-10 py-2 
              text-white text-lg mt-4">
                Surprise Me</button>
         </div>

      </div>  
    )
}

export default Testimonials