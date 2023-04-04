import './home.css';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import Navbar from '../Navbar/Navbar';
function Home(props){
    //console.log(prop.data)
    return(
        <div>
            <Navbar/>
            <Tours data={props.data}/>
            <Footer/>
        </div>
    );
}
export default Home;