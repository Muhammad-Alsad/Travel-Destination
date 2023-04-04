import './home.css';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import Navbar from '../Navbar/Navbar';
function Home(prop){
   // console.log(prop.data)
    return(
        <div>
            <Navbar/>
           
            <Tours data={prop.data}/>
            <Footer/>
        </div>
    );
}
export default Home;