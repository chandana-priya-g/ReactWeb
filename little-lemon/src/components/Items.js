
import ItemCard from "./ItemCard";
import img1 from "../icons_assets/greek salad.jpg";
import img2 from "../icons_assets/bruchetta.svg";
import img3 from "../icons_assets/lemon dessert.jpg";
import { Link } from 'react-router-dom';
import "../Styles/Items.css";

const menuData = [
  {
      title:"Greek Salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      imgsrc: img1
      
  },
  {
      title:"Bruchetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      imgsrc: img2
      
  },
  {
      title:"Lemon Dessert",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      imgsrc: img3
      
  },
];

function Items() {

    return (
        <div className="itemsCombo">
          <div className="items-heading">
            <h2>New Arrivals</h2>
            <Link id="res-submit" to="/booking">
              Online Menu
            </Link>
          </div>
          <div className="items-container">
          {menuData.map((item, index) => 
            <ItemCard data={item} />
          )}
          </div>
      </div>
     );
  
}

export default Items;