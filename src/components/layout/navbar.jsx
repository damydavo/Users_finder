import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
    return ( 
        <nav className="navbar bg-neutral text-neutral-content shadow-lg text-neutral-content">
            <div className="container mx-auto">
              <div className="flex-none mx-2 px-2">
                <FaGithub className="inline text-3xl pr-2"/>
                <Link to = '/' className="text-lg font-bold align-middle">
                { title }

                </Link>
              </div>

              <div className="flex-1">
                    <div className="flex justify-end">
                        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                        Home
                        </Link>
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                          About
                        </Link>
                    </div>
              </div>
            </div>
        </nav>
     );
}
 
NavBar.defaultProps = {
    title: 'Github Finder'
}

NavBar.propTypes = {
   title: PropTypes.string,
}

export default NavBar;