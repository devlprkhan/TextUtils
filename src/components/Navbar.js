import React from 'react'
// Eis KO Use Kr K Main Props Pr Eik Check Laga Sakta Hou K Sirf Perticular Data type He Allow Hain For Example if its String Toh Phir String K Elawa or Koi DataType Nahi Allow.
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// The Props is used to access the Argument Pass in App.js props.title & props.about
export default function Navbar(props) {

    let themeStylingNums = ['One', 'Two', 'Three', 'Four']

    function navbarStyling(navbarStyleNum){
        //#S1 ==> All Links Styling 
        //Nav Links Styling Using classes
        let href = document.querySelectorAll('a');
        
        Array.from(href).forEach(element => {
            for (const num of themeStylingNums) {
                if (element.classList.contains('modeLink'+num)) {
                    element.classList.remove('modeLink'+num);
                    element.classList.remove('modeLink');
                }
            }
            element.classList.add('modeLink'+navbarStyleNum);
        })
        
        //#S2 ==> Hamburger Icon Styling 
        // Hamburger Icon Styling
        
        // Inner
        let faBars = document.getElementsByClassName('fa-bars');

        Array.from(faBars).forEach(element => {
            for (const num of themeStylingNums) {
                if (element.classList.contains('fa-bars-'+num)) {
                    element.classList.remove('fa-bars-'+num);
                    element.classList.remove('fa-bars-default');
                }
            }
            element.classList.add('fa-bars-'+navbarStyleNum);
        });

        // Outer
        let navbarToggler = document.getElementsByClassName('navbar-toggler');

        Array.from(navbarToggler).forEach(element => {
            for (const num of themeStylingNums) {
                if (element.classList.contains('navbar-toggler-'+num)) {
                    element.classList.remove('navbar-toggler-'+num);
                    element.classList.remove('navbar-toggler-default');
                }
            }
            element.classList.add('navbar-toggler-'+navbarStyleNum);
        })
    }

    if (props.mode === 'themeOne') {

        navbarStyling('One');
        
    }
    else if (props.mode === 'themeTwo') {

        navbarStyling('Two');

    }
    else if (props.mode === 'themeThree') {

        navbarStyling('Three');

    }
    else if (props.mode === 'themeFour') {

        navbarStyling('Four');

    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="modeLink navbar-brand" to="/"><img alt='logo' className='logo' src="/navLogo.png" />{props.title}</Link>
                <button className="navbar-toggler navbar-toggler-default shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <i className="fas fa-bars fa-bars-default"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link modeLink active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link modeLink" to="/about">{props.about}</Link>
                        </li>
                    </ul>

                    <div className="themePalate">

                        <div id="themeOne" onClick={() => { props.toggleMode('themeOne') }} className="themeOne">
                            <div className="themeOneColorOne"></div>
                            <div className="themeOneColorTwo"></div>
                        </div>
                        <div id="themeTwo" onClick={() => { props.toggleMode('themeTwo') }} className="themeTwo">
                            <div className="themeTwoColorOne"></div>
                            <div className="themeTwoColorTwo"></div>
                        </div>
                        <div id="themeThree" onClick={() => { props.toggleMode('themeThree') }} className="themeThree">
                            <div className="themeThreeColorOne"></div>
                            <div className="themeThreeColorTwo"></div>
                        </div>
                        <div id="themeFour" onClick={() => { props.toggleMode('themeFour') }} className="themeFour">
                            <div className="themeFourColorOne"></div>
                            <div className="themeFourColorTwo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Apply Checks On Proptype For More Check Detail On Import Proptype
// Allow Only string Data or agr isko string na mila toh error through hoga because of isRequired

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// I also set default values
Navbar.defaultProps = {
    title: 'Logo Here',
    about: 'About Text Here'
}