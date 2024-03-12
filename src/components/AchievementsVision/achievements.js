import React from "react";
import { useNavigate } from 'react-router-dom';
import './vissonButton.css';
import { BroderLine } from "../BookRecommendation/Booksrecommendation";


const btnName={
  name:"Get in Touch"
 }

 const ButtonComponent = () => {
   const navigate = useNavigate();
   const redirectToContactPage = () => {
     navigate('/contact');
   };
 
   return (
     <button className="custom-button" onClick={redirectToContactPage}>
       {btnName.name} &rarr;
     </button>
   );
 };



export const OurVison = () => {
 
  return (
    <>
      <div className="  bg-slate-900 h-auto w-100 flex flex-wrap items-center text-center pt-6 m-1">
        <div className=" w-full h-auto flex flex-wrap flex-col items-center">
          <p className=" text-white-800 font-bold text-3xl ">Our Vision</p>
          <BroderLine />
        </div>
        <div className=" w-full h-auto flex flex-wrap flex-col items-center">
          <p className="w-[50%] h-auto font-semibold text-xl text-wrap pb-10">
            Some quick example text to build on the card title and make up the
            bulk Some quick example text to build on the card title and make
            up....    
          </p>
          <ButtonComponent />
        </div>
       
      </div>
    </>
  );
};

const AchievementCom = () => {
  return (
    <>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center pt-8 ">
        <div className="w-full h-auto flex flex-warp flex-col items-center">
          <a href="/Books">
            <p className="text-white-800 font-bold text-3xl">
              our achievements
            </p>
          </a>
          <BroderLine />
        </div>

        <div className=" w-full flex flex-wrap justify-evenly ">
          <div className=" w-46 flex flex-col items-center mb-12 ">
            <img
              className="w-[150px] h-[100px]"
              src="https://www.svgrepo.com/show/428734/university-academy-school.svg"
            />
            <p className=" font-3xl ">50+</p>
            <p className="font-3xl">Different University</p>
          </div>
          <div className=" w-46 flex flex-col items-center mb-12 ">
            <img
              className="w-[150px] h-[100px]"
              src="https://www.svgrepo.com/show/492789/books-and-people.svg"
            />
            <p className=" font-3xl ">300+</p>
            <p className="font-3xl">Different Subject</p>
          </div>
          <div className=" w-46 flex flex-col items-center mb-12 ">
            <img
              className="w-[150px] h-[100px]"
              src="https://www.svgrepo.com/show/475294/e-book.svg"
            />
            <p className=" font-3xl ">100+</p>
            <p className="font-3xl">Active Reader</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementCom;
