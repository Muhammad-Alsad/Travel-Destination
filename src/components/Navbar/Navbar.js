import { Link } from "react-router-dom"
import Header from "../header/Header";

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/"><li><a class="active" >Home</a></li></Link>
                    <Link to="/"><li><a class="active" >Contact-page</a></li></Link>
                 </ul>   
            </nav>

        </>

    )
}
export default Navbar;