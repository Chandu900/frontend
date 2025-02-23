import React,{useContext} from 'react'
import logo from '../../images/instaLogo.png'
import './NabBar.css'
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext';
import { FaHome,j } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlUserFollowing } from "react-icons/sl";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";


function NabBar({ login }) {
  const { setModalOpen } = useContext(LoginContext)

  

  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    
    if (token || login) {
      login = true;
      return (
        <>
          <Link key={"a1"} to="/">
            <li>Home</li>
          </Link>
          <Link key={"a14"} to="/profile">
            <li>Profile</li>
          </Link>
          <Link key={"a13"} to="/myfollowingpost">
            <li>My Following</li>
          </Link>
          <Link key={"a2"} to="/createPost">
            <li>Create Post</li>
          </Link>
          {login && (
            <Link key={"a2"} to="">
              <button
                className="primaryBtn"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Log Out
              </button>
            </Link>
          )}
        </>
      );
    } else {
      return <>
        <Link key={"b1"} to="/signup">
          <li>SignUp</li>
        </Link>
        <Link key={"b2"} to="/signin">
          <li>SignIn</li>
        </Link>
      </>;
      
    }
  }
  //for mobile
const loginStatusMobile = () => {
  const token = localStorage.getItem("jwt");

  if (token || login) {
    login = true;
    return (
      <>
        <Link key={"a1"} to="/">
          <li>
            <FaHome />
          </li>
        </Link>
        <Link key={"a14"} to="/profile">
          <li>
            <CgProfile />
          </li>
        </Link>
        <Link key={"a2"} to="/createPost">
          <li>
            <IoAddCircleOutline />
          </li>
        </Link>
        <Link key={"a13"} to="/myfollowingpost">
          <li>
            <SlUserFollowing />
          </li>
        </Link>

        {login && (
          <Link key={"a2"} to="">
            <button
              className="lg"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <IoMdLogOut />
            </button>
          </Link>
        )}
      </>
    );
  } else {
    return (
      <>
        <Link key={"b1"} to="/signup">
          <li>SignUp</li>
        </Link>
        <Link key={"b2"} to="/signin">
          <li>SignIn</li>
        </Link>
      </>
    );
  }
};



  return (
    <div className="navbar">
      <img src={logo} alt="instaLogo" id='insta-logo' />
      <ul className="nav-menu">
        {loginStatus()}
        
      </ul>
      <ul id='mobile-menu'>
        {loginStatusMobile()}
        
      </ul>
    </div>
  );
}

export default NabBar
