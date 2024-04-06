import myCV from './my-CV.pdf';

function Footer() {
    return (
        <div id="footer">
            {/* ADD website to LinkedIn*/}
            <div id="contact"><a href="mailto:morganksmith1@aol.com"><i className="material-icons-outlined" title="morganksmith1@aol.com">email</i></a>
            <a href="https://www.linkedin.com/in/morganksmith1/" target="_blank"><i className="fa-brands fa-linkedin" title="LinkedIn"/></a></div>
            <div id="copyright">&copy; Morgan Smith 2024</div>
            <a href={myCV} target="_blank" download="Morgan Smith CV" rel="noreferrer"><button className="CVClick" title="Download my CV"><span>Download CV</span><i className="material-icons-outlined">file_download</i></button></a>
        </div>
    )
}

export default Footer;