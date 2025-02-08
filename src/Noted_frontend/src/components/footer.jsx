export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <p className="footer">Copyright © {currentYear}</p>
        </footer>
    );
};