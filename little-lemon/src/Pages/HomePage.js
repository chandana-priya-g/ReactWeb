import LogoComponent from "../components/LogoComponent";
import CustomerFeed from "../components/CustomerFeed";
import Items from "../components/Items";
import AboutComponent from "../components/AboutComponent";


export default function HomePage() {
    return (
        <div>

        
            <div className='home-container'>
                <LogoComponent />
            </div>
            <div className="specials-container">
                <Items />
            </div>
            <div className="customerfeed-container">
                <CustomerFeed />
            </div>
            <div className="about-container">
                <AboutComponent />
            </div>
            
            
        </div>
    );
  }
