import selfieCartoon from './selfie cartoon.png';

function Introduction() {
    return (
        <div id="introduction">
            <div id="intro-text">
                <h2>Hello, I'm Morgan</h2>
                <h1>a <span id="softdev">Software Developer</span></h1>
                <p>I have a passion for creating websites and applications</p>
            </div>
            <div id="intro-image">
                <img src={selfieCartoon} alt="A selfie of me in cartoon form"/>
            </div>
        </div>
    )
}

export default Introduction;