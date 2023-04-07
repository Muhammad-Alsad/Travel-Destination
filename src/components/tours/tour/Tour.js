import { Link } from "react-router-dom";
import './Tour.css'

function Tour(props) {
    return (
            <Link to={`/city/${props.element.id}`}>
                <div class="grid-container">
                    <div className='grid-item' >
                        <div><h1>{props.element.name}</h1></div>
                        <div className='img'><img src={props.element.image} alt={props.element.name} /></div>
                    </div>
                </div>
                <div className="space"></div>
            </Link >
        
    );
}
export default Tour; 
