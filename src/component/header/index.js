import '../../index.css';
import logo from "../../images/logo.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [active, setActive] = useState(false)
    const [isopen, setIsOpen] = useState(false)
    const openDropDown = () => {
        setActive(!active)
    }
    const openMenu = () => {
      setIsOpen(!isopen)
  }
  return (
    <>
    <section className="header">
        <div className="container mx-auto">
            <div className="grid grid-cols-12 flex items-center justify-between">
              <div className="col-span-3 span-md-4 span-sm-6">
                <a href="./">
                    <img src={logo} className="" alt="logo" />
                </a>
                <button className='open-menu' onClick={openMenu}><i class="fa-solid fa-bars"></i></button>
              </div>
              <div className="col-span-9 span-md-12 span-sm-12">
                <div className={isopen ? "nav-bar active" : "nav-bar"}>
                  <button className='close-menu' onClick={openMenu}><i class="fa-solid fa-xmark"></i></button>

                    <ul className="list flex items-center justify-content-between">
                      <Link to="./" className="item">
                      Home
                      </Link>
                      <Link to="./about" className="item">
                      About us
                      </Link>
                        <li className="item"><a href="#">Syllabus</a></li>
                        <li className="item"><a href="#">Testimonials</a></li>
                        <li className="item"><a href="#">Contact</a></li>
                        <li className="">
                        <button className="dropdown-btn" type="button" onClick={openDropDown}>
                        <i className="fa-solid fa-user"></i>  Login as Student <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul className={ active ? "drop-down-menu active" : "drop-down-menu"}>
                            <li><a className="dropdown-item" href="#">Student</a></li>
                            <li><a className="dropdown-item" href="#">Teachar our Staff</a></li>
                            <li><a className="dropdown-item" href="#">Parent our Guadian</a></li>
                        </ul>

                        </li>
                    </ul>
                </div>
              </div>
        </div>
    </div>
</section>
</>
  );
}

export default Header;
