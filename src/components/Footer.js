import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

export default function Footer() {

    return (
        <>
            <div className="end-1">
                <div></div>
            </div>

            <section className="container-3">
                <div className="column">
                    <h4>Resources</h4>
                    <Link to="/" className="column-hover">
                        <p>Help</p>
                    </Link>
                    <Link to="/" className="column-hover">
                        <p>Privacy</p>
                    </Link>
                </div>
                <div className="column">
                    <h4>Socials</h4>
                    <a href="https://facebook.com/kaisernics/" target="_blank" className="column-hover">
                        <p>Facebook</p>
                    </a>
                    <a href="https://instagram.com/kaizenics/" target="_blank" className="column-hover">
                        <p>Instagram</p>
                    </a>
                    <a href="https://github.com/kaizenics/" target="_blank" className="column-hover">
                        <p>GitHub</p>
                    </a>
                </div>
                <div className="column">
                    <h4>Support</h4>
                    <Link to="/" className="column-hover">
                        <p>FAQ</p>
                    </Link>
                    <Link to="/" className="column-hover">
                        <p>Updates</p>
                    </Link>
                </div>
                <div className="column">
                    <h4>Open Source</h4>
                    <Link to="/" className="column-hover">
                        <p>Contribute</p>
                    </Link>
                    <Link to="/" className="column-hover">
                        <p>Report a bug</p>
                    </Link>
                    <Link to="/" className="column-hover">
                        <p>Request a feature</p>
                    </Link>
                </div>
            </section>

            <footer className="column-2">
                <div className="author-end">
                    <a href="https://facebook.com/kaisernics/" target="_blank" className="column-hover">
                        <p>© 2023 Niko Soriano</p>
                    </a>
                </div>
            </footer>
        </>
    )
}