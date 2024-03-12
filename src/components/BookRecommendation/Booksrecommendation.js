import React from "react";
import Card,{CardTwo} from "../Card/card";


export const BroderLine=()=>{
  return(
  <div className="w-40 h-1 border-b-4 border-white-400 mt-2 rounded-2xl md:mt-4 mb-12">  
  </div>
  )
} 
const Heading=()=>{
     
  return(
    <div className="w-full h-auto flex flex-warp flex-col items-center">
    <a href="/Books">
      <p className="text-white-800 font-bold text-3xl">
        " Our Recommendation For You "
      </p>
    </a>
    <BroderLine/>
  </div>
  );
}
const BooksRecomm = () => {
  return (
    <>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center pt-8 ">
        <Heading/>
        <div className="flex flex-wrap justify-evenly ">
          <CardTwo/>
         
         

        </div>
      </div>
    </>
  );
};
export default BooksRecomm;
