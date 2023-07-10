const date = new Date();
const year = date.getFullYear();

function Footer() {
    return <footer className="footer">
        <p className="footer-p">iFio Brand&copy; Copyright {year}</p>
    </footer>
}

export default Footer;