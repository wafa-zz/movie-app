import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">🎬 MovieHive </Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/favorites" className="nav-link">Favorites</Link>
                    <button className="login-btn" onClick={openModal}>Login</button>
                </div>
            </nav>

            {/* Login Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>✖</button>
                        <h2 className="modal-heading">Welcome Back</h2>
                        <span className="movie-icon"> 🍿 </span>
                        <form className="login-form">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" required />

                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" required />

                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                            </div>

                            <button type="submit" className="modal-login-btn">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
