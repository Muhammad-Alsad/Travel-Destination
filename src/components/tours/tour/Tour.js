import { Link } from "react-router-dom";
import './Tour.css'

function Tour(props) {
    //console.log(props.element)
    return (
      
            <Link to={`/city/${props.element.id}`}>
                <div class="grid-container">
                    <div className='grid-item' >
                        <div><h1>{props.element.name}</h1></div>
                        <div className='img'><img src={props.element.image} alt={props.element.name} /></div>
                       
                        <div className='space'>
                        </div>
                    </div>
                </div>

            </Link >
        
    );
}

export default Tour; 
