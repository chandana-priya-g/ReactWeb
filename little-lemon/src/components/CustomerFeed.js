
import Testimony from './Testimony';
import { Link } from 'react-router-dom';
import "../Styles/CustomerFeed.css";


const feedData = [
  {
        name:"Sara",
        testimony: "One of the best dining serives that I experienced in the recent times. Absolutely worth it.",
        rating: "5",
        imgsrc: ""
      
  },
  {
        name:"Tara",
        testimony: "Great food! The Greek Salad was deserves a special mention!",
        rating: "4",
        imgsrc: ""
      
  },
  {
        name:"John",
        testimony: "Amazing food and excellent serive. Keep up! I totally recommend going again",
        rating: "5",
        imgsrc: ""
      
  },
];

function CustomerFeed() {

    return (
        <div className="feedCombo">
          <div className="feed-heading">
            <h2>Testimonials</h2>
          </div>
          <div className="feed-container">
          {feedData.map((item, index) => 
            <Testimony data={item} />
          )}
          </div>
      </div>
     );
  
}

export default CustomerFeed;