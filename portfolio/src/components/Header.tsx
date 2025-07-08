import { useNavigate, useLocation } from "react-router-dom";


function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <>
        <p onClick={() => navigate("/")}>Anton Schyberg</p>
        <ul>
            <li>
                <button 
                    type="submit" 
                    onClick={() => navigate("/")}
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </button>
            </li>
            <li>
                <button 
                    type="submit" 
                    onClick={() => navigate("/about")}
                    className={location.pathname === "/about" ? "active" : ""}
                >
                    About
                </button>
            </li>
        </ul>
        </>
    )
}

export default Header;