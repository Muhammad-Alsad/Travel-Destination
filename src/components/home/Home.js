import './home.css';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

function Home(prop){
   // console.log(prop.data)
    return(
        <div>
            <Header/>
            <Tours data={prop.data}/>
            <Footer/>
        </div>
    );
}
export default Home;