import './header.css';

function Header() {
    return (
        <header>
            <nav >
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="">Contact-page</a></li>
                    <li><a href="">About us</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;