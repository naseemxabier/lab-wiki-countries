import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <Link to="/"><span className="navbar-brand">WikiCountries</span></Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;