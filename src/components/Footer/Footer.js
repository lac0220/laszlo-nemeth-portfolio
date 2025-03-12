import "./footer.scss";
import { useLocation } from "react-router-dom";

export default function Footer() {
    //Footer removed for message page
    const { pathname } = useLocation();
        if (pathname === "/laszlo-nemeth-portfolio/message") 
        return null;
        
    return (
        <footer>
            <p>Copyright ©</p>
            <p>Laszlo Nemeth<span style={{ fontFamily: '"Times New Roman", Times, serif' }}> 2025</span></p>
        </footer>
    );
}