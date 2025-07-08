import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();
    return (
        <ul>
            <li>
                <button type="submit" onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
                <button type="submit" onClick={() => navigate("/about")}>About</button>
            </li>
        </ul>
    )
}

export default Header;