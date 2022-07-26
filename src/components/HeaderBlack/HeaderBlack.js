import React, { useState, useRef, useEffect } from "react";
import liOneWhite from '../../Images/liOneWhite.svg';
import liTwoWhite from '../../Images/liTwoWhite.svg';
import liFourWhite from '../../Images/liFourWhite.svg';
import liFiveWhite from '../../Images/liFiveWhite.svg';
import liSixWhite from '../../Images/liSixWhite.svg';
import liFour from '../../Images/qaraqara.svg';
import small from '../../Images/qaraqara2.svg';
import twoLine from '../../Images/qara1.svg';
import '../HeaderBlack/HeaderBlack.css'
import { Link } from "react-router-dom"
import Header from "../Header/Header";
import liFive from '../../Images/Group 124.svg';
import Data from "../../Data.json"
import loglogo from "../../Images/shirin/loglogo.svg"
import useOutsideClick from "../useOutsideClick"
import HamMenu from "../Hamburger/HamMenu";
const HeaderBlack = ({ dimensions,menuOpen }) => {

    const searchRef = useRef();
    const inputRef = useRef();
    const closeSearchRef = useRef();
    const lupaRef = useRef();
    const filetedContRef = useRef();
    const profileRef = useRef();
    const newinRef = useRef();
    const refRef = useRef();
    const absoluteLupa = useRef();
    const hamburgerRef = useRef();

    const activeHeaderRef = useRef();
    const activeSearchRef = useRef();



    const [value, setValue] = useState('');
    const [filteredShoes, setFilteredShoes] = useState();
    const [shoes, setShoes] = useState();
    const [map, setMap] = useState();
    const [activeHeader, setActiveHeader] = useState(true);
    const [activeInput, setActiveInput] = useState(true);
    const [activeWidth, setActiveWidth] = useState(true)
    const [openedMenu, setOpenedMenu] = useState(false)

    useOutsideClick(refRef, () => {
        //    inputRef.current.style.display="none";
        filetedContRef.current.style.display = "none"
        //    absoluteLupa.current.style.display="none"

        console.log("salamsss")
        setActiveHeader(true)
        setActiveInput(true)

        setActiveWidth(true)









    });

    const openInput = () => {

        // setActiveHeader(!activeHeader)
        // setActiveInput(!activeInput)
        // setActiveWidth(!activeInput)

        setActiveHeader(false)
        setActiveInput(false)
        setActiveWidth(false)


        console.log(activeHeader)




        //    setActiveHeader(false)
        // inputRef.current.style.opacity="1"
        // inputRef.current.style.width="100%"

        // lupaRef.current.style.display="none"
        // newinRef.current.style.display="none"
        // profileRef.current.style.display="none"

    }



    const searchValue = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {

        let result = []
        if (value.length > 0) {
            result = Data.filter(shoes => shoes.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            // filetedContRef.current.style.display="block";
        } else {
            result = []

            // filetedContRef.current.style.display="none";
        }
        setFilteredShoes(result)
    }, [value])

    const openMenu = () => {

        if (!openedMenu) {
            setOpenedMenu(true)
            document.body.style.overflow = "hidden"
            hamburgerRef.current.style.opacity = "0"

        } else {
            setOpenedMenu(false)
            document.body.style.overflow = "auto"
            hamburgerRef.current.style.opacity = "1"
        }

        console.log(openedMenu)

    }

    return <>
        {(dimensions.width > 800) &&
            <div className="headerBlack">
                <ul className="headerBlack_ul_one">
                    <a href="https://www.instagram.com/danilov_baku/?hl=en">
                        <li><img src={liOneWhite} /></li>
                    </a>

                    <a href="https://www.facebook.com/Danilov-Shoes-2000969736610486/">
                        <li><img src={liTwoWhite} className="distanc" /></li>
                    </a>
                    <Link to="/about">
                        <li className="textBlack">About us</li>
                    </Link>
                    <Link to="/collection">
                        <li className="textBlack">Man</li>
                    </Link>
                </ul>
                <Link to="/">
                    <img src={liFourWhite} className="logoBlack" />
                </Link>

                <div className={activeHeader ? "active-header active1" : "deactive-header"} >

                    <ul className="headerBlack_ul_two">
                        <Link to="/newIn" ref={newinRef}>
                            <li className="textBlack">What’s New</li>
                        </Link>

                        <Link to="/profile2" ref={profileRef} >
                            <li className="textBlack" >Profile</li>
                        </Link>
                        <div className="search" ref={searchRef} onClick={openInput}>
                            <li ><img src={liFiveWhite} /></li>
                        </div>

                        <div className={!activeInput ? "active-search" : "deactive-search"} >


                            <div className="elebele" >
                                <input placeholder="Search" type="text" ref={inputRef} className="searchInput" value={value} onChange={searchValue}>

                                </input>
                                <div className="input-lupa" ref={absoluteLupa}><img src={liFive} /></div>

                                <div className="fileteredShoes-cont" ref={filetedContRef}>


                                    {filteredShoes && filteredShoes.map((e) => {
                                        return (
                                            <p > {e.name}</p>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>

                        <Link to="/bag">
                            <li  ><img src={liSixWhite} /></li>
                        </Link>

                    </ul>
                </div>

            </div>}
        {(dimensions.width <= 800) && <div className={`headerBlack ${menuOpen && 'sss'}`}>

            <div className="hamburger" ref={hamburgerRef} onClick={openMenu}>
                <div className="header_ul_one">

                    <img src={twoLine} />

                </div>

                <div className="header_ul_one">

                    <div><img src={twoLine} /></div>

                </div>
            </div>
          
                <Link to="/">

                    <img className="sizeImgBlack" src={loglogo} />
                </Link>
           

            <Link to="/bag">
                <ul className="headerBlack_ul_two">
                    <li ><img src={small} /></li>

                </ul>
            </Link>
        </div>
        }

        <div className={openedMenu ? "active-ham" : "deactive-ham"}>
            <HamMenu />

        </div>
    </>
}
export default HeaderBlack