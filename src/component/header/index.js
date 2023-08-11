import '../../index.css';
import logo from "../../images/logo.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [active, setActive] = useState(false)
    const [isopen, setIsOpen] = useState(false)
    const [activeSyllabus, setActiveSyllabus] = useState(false)
    const openDropDown = () => {
        setActive(!active)
    }
    const openMenu = () => {
      setIsOpen(!isopen)
  }
  const closeMenu = () => {
    setIsOpen(false)
}


const openDropDownSyllabus = () => {
  setActiveSyllabus(!activeSyllabus)
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
                    <ul className="list flex items-center justify-between">
                    {/* <li className="item" onClick={closeMenu}><a href="#">Home</a></li>
                    <li className="item" onClick={closeMenu}><a href="#">About us</a></li>
                    <li className="item" onClick={closeMenu}><a href="#">Syllabus</a></li>
                    <li className="item" onClick={closeMenu}><a href="#">Testimonials</a></li> */}
                    <li className="item"><a href="#"> <Link to="./" className="item" onClick={closeMenu}>
                      Home
                      </Link></a></li>
                      <li className="item"><a href="#">  <Link to="./about" className="item" onClick={closeMenu}>
                      About us
                      </Link></a></li>
                      <li className="item syllabus-item" onClick={openDropDownSyllabus}>
                      Syllabus
                      <button className="ml-2" type="button" >
                        <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul className={ activeSyllabus ? "drop-down-menu active" : "drop-down-menu"}>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Math</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Biology </a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Physics  </a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Chemistry  </a></li>
                        </ul>
                     </li>
                      <li className="item"> <Link to="./testimonial" className="item" onClick={closeMenu}>
                      Testimonials
                      </Link></li>
                        <li className="item" onClick={closeMenu}><a href="#">Contact</a></li>
                        <li className="">
                        <button className="dropdown-btn" type="button" onClick={openDropDown}>
                        <i className="fa-solid fa-user"></i>  Login as Student <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <ul className={ active ? "drop-down-menu active" : "drop-down-menu"}>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Student</a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Parent or Guardian </a></li>
                            <li onClick={closeMenu}><a className="dropdown-item" href="#">Institution  </a></li>
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
