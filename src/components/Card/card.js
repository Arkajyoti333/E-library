import React from "react";
import CustomButton from "../Button/Button";

export function CardTwo() {

const cardArr=[
      {
        id: 1 ,
        image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        titleH1: "About node book",
        aboutTagp:
                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur debitis",
        author:"Tom Cate",

      },
      {
        id: 8 ,
        image:"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titleH1: "About node Js",
        aboutTagp: " Some quick example text to build on the card title t to build on the card title and make up....",
        author:"Ryan Dahl",

      },
      {
        id: 6,
        image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        titleH1: "About node book",
        aboutTagp:
                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur debitis",
        author:"Tom Cate",

      },
      {
        id: 2 ,
        image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        titleH1: "About node book",
        aboutTagp:
                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur debitis",
        author:"Tom Cate",

      },
      {
        id: 3 ,
        image:"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titleH1: "About node Js",
        aboutTagp: " Some quick example text to build on the card title t to build on the card title and make up....",
        author:"Ryan Dahl",

      },
      {
        id: 4 ,
        image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        titleH1: "About node book",
        aboutTagp:
                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur debitis",
        author:"Tom Cate",

      },
      {
        id: 6 ,
        image:"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titleH1: "About node Js",
        aboutTagp: " Some quick example text to build on the card title t to build on the card title and make up....",
        author:"Ryan Dahl",

      },
      {
        id: 10 ,
        image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        titleH1: "About node book",
        aboutTagp:
                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exceptur debitis",
        author:"Tom Cate",

      },
];


  return (
    <>
    {cardArr.map((cardObj) => (
    <div key={cardObj.id} className="w-[250px] md: h-[50%] rounded-md border p-1 mx-2 mt-4 ">
     
       
        <img
        src={cardObj.image}
        alt="Laptop"
        className="h-[90px] w-full rounded-md object-cover"
        key={cardObj.id}
      />
      
      <div className="p-3 ">
        <h1 className="text-lg font-semibold">{cardObj.titleH1}</h1>
        <p className="mt-3 text-sm text-white-600">
          {cardObj.aboutTagp}
          <span className="mt-2 block text-md">Writer ~ {cardObj.author}</span>
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read now
        </button>
      </div>
   
    </div>
     ))}
     </>
    
  );
}

const Card = () => {

  return (
    <>
      <div className="card w-72 p-3 rounded-sm overflow-hidden mx-1">
        {/* order border-white  */}
        <img
          className="card-img-top object-cover w-full h-50 rounded-xl"
          src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-blue-600 text-xl font-semibold">
            Node Js
          </h5>
          <p className="card-text text-white">
            Some quick example text to build on the card title and make up the
            bulk Some quick example text to build on the card title and make
            up....
            <p className="p-1 font-bold">written By ~ Ryan Dahl</p>
          </p>

          {/* button component */}

          <CustomButton />

          {/* <button className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full inline-block mt-2">
        Read more
      </button> */}
        </div>
      </div>
    </>
  );
};

export default Card;

//     <div className="m-3 text-black p-1 border-2 border-red-700">
//       <div className="max-w-xs md:max-w-[350px] md:max-h-[3000px] mx-auto bg-white rounded-xl overflow-hidden relative">
//         <div>
//           {/* images */}
//           <div>
//             <img
//               className="h-24 w-full md:h-40 w-25 object-cover"
//               src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="node Book"
//             />
//           </div>

//           {/* content */}
//           <div className="p-2">
//             <div className="text-indigo-500 font-semibold">
//               This is node js Book
//             </div>
//             <a
//               href="###"
//               className="block mt-1 font-medium text-black hover:text-red-500"
//             >
//               Node. js was initially about 13 years after the introduction of
//               the first server-side JavaScript environment,
//               <br />
//             </a>
//             <span className="p-1 font-bold">written By ~ Ryan Dahl</span>
//             <p className="pl-5 text-green-700 font-semibold">
//               `Keep Learning...`
//             </p>
//           </div>

//           {/* button  */}
//           <div className="absolute bottom-0 right-0 mb-1 mr-2">
//             <button className="bg-sky-500 text-white font-bold py-1 px-2 rounded-full transition duration-300 ease-in-out hover:bg-sky-700 hover:text-black">
//               Read More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );
