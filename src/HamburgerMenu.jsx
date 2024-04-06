import React from "react";
import myCV from './my-CV.pdf';

function HamburgerMenu() {
    // State for menu showing, menu icon or close icon showing
    const [showMenuDisplay, setShowMenuDisplay] = React.useState(false);
    
    // Conditional CSS
    const styles = {
        popup:{
          transform: showMenuDisplay? "translateY(0)" : "translateY(-110%)"
        },
        closeIcon:{
          display: showMenuDisplay? "block" : "none"
        },
        menuIcon:{
          display: showMenuDisplay? "none" : "block"
        }
      };
    return (
      <>
        <ul className="menu" style={styles.popup}>
            <li onClick={()=>{setShowMenuDisplay(false)}}><a className="menuItem" href="#introduction">Home<i className="fa-solid fa-house" id="small_icon" /></a></li>
            <li onClick={()=>{setShowMenuDisplay(false)}}><a className="menuItem" href="#aboutMe">About Me<i className="material-icons-outlined">account_circle</i></a></li>
            <li onClick={()=>{setShowMenuDisplay(false)}}><a className="menuItem" href="#skills">Skills<i class="fa-solid fa-list" id="small_icon"/></a></li>
            <li onClick={()=>{setShowMenuDisplay(false)}}><a className="menuItem" href="#projects">Projects<i className="material-icons-outlined">apps</i></a></li>
            <li onClick={()=>{setShowMenuDisplay(false)}}><a className="menuItem" href="mailto:morganksmith1@aol.com" title="morganksmith1@aol.com">Contact<i className="material-icons-outlined">email</i></a></li>
            <li onClick={()=>{setShowMenuDisplay(false)}}><a className="menuItem" href={myCV} target="_blank" download="Morgan Smith CV" rel="noreferrer" title="Download my CV">CV<i className="material-icons-outlined">description</i></a></li>
        </ul>
        <button className="hamburger">
            <i className="menuIcon material-icons" onClick={()=>{setShowMenuDisplay(true)}} style={styles.menuIcon}>menu</i>
            <i className="closeIcon material-icons" onClick={()=>{setShowMenuDisplay(false)}} style={styles.closeIcon}>close</i>
        </button>
      </>
    )
}

export default HamburgerMenu;