import '../index.css';
import logo from "../images/logo.png"
import { useState } from 'react';
function Header() {
    const [active, setActive] = useState(false)
    const openDropDown = () => {
        setActive(!active)
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
              </div>  
              <div className="col-span-9 span-md-12 span-sm-12">
                <div className="nav-bar">
                    <ul className="list flex items-center">
                        <li className="item"><a href="#">Home</a></li>
                        <li className="item"><a href="#">About us</a></li>
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
