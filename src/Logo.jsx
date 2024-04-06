import logo from "./MSLogo.png";

function Logo() {
    return (
        <div id="my_logo">
            <a href="/" title="Home"><h3><img src={logo} alt="Logo with the initials MS on a computer screen"/>Morgan Smith</h3></a>
        </div>
    )
}

export default Logo;