import { Outlet } from 'react-router-dom';
import {NavBar,Footer} from "./components/Index";



function App() {

  // const cardData = [
  //   {
  //     title: 'Card 1',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     image: 'https://placekitten.com/300/200',
  //   },
  //   {
  //     title: 'Card 2',
  //     description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  //     image: 'https://placekitten.com/300/201',
  //   },
  //   // Add more card data as needed
  // ];
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;



   {/* border-2 border-sky-500 */}
           {/* <div className="flex flex-wrap justify-between"> */}

        {/* <Card /> */}
        {/* <Card />
        <Card />
        <Card /> */}
      {/* </div> */}