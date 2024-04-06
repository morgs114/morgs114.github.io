import html5Logo from './html5-logo.png';
import cssLogo from './css-logo.png';
import jsLogo from './JavaScript-logo.png';
import reactLogo from './react-logo.png';
import bstrLogo from './bootstrap-logo.png';
import jQLogo from './jquery-logo.png';
import reduxLogo from './redux-logo.png';
import sassLogo from './Sass_logo.png';
import nodeLogo from './node-logo.png';
import cLogo from './c-logo.png';
import vscLogo from './vscode-logo.png';
import awsLogo from './aws-logo.png';
import myCV from './my-CV.pdf';

function Skills() {
    return (
        <div id="skills">
            <div id="skills_intro">
                <h2>My Skills</h2>
                <h3 id="certTitle">Front-End Development Certifications:</h3>
                <ul>
                    <li><a href="https://www.freecodecamp.org/certification/morgansmith/javascript-algorithms-and-data-structures" target="_blank" title="Open certificate in new tab"><i className="fa-solid fa-up-right-from-square" /></a><span>JavaScript Algorithms and Data Structures</span></li>
                    <li><a href="https://www.freecodecamp.org/certification/morgansmith/responsive-web-design" target="_blank" title="Open certificate in new tab"><i className="fa-solid fa-up-right-from-square" /></a><span>Responsive Web Design</span></li>
                    <li><a href="https://www.freecodecamp.org/certification/morgansmith/front-end-development-libraries" target="_blank" title="Open certificate in new tab"><i className="fa-solid fa-up-right-from-square" /></a><span>Front End Development Libraries</span></li>
                </ul>
                <a href={myCV} target="_blank" download="Morgan Smith CV" rel="noreferrer"><button className="CVClick" title="Download my CV"><span>Download CV</span><i className="material-icons-outlined">file_download</i></button></a>
            </div>
            <div id="skills_container">
                <div className="skill_child"><img src={html5Logo} alt="HTML 5 Logo"/><legend className="skill_leg">HTML5</legend></div>
                <div className="skill_child"><img src={cssLogo} alt="CSS Logo"/><legend className="skill_leg">CSS</legend></div>
                <div className="skill_child"><img src={jsLogo} alt="JavaScript Logo"/><legend className="skill_leg">JavaScript</legend></div>
                <div className="skill_child"><img src={reactLogo} alt="React Logo"/><legend className="skill_leg">React</legend></div>
                <div className="skill_child"><img src={bstrLogo} alt="Bootstrap Logo"/><legend className="skill_leg">Bootstrap</legend></div>
                <div className="skill_child"><img src={sassLogo} alt="Sass Logo"/><legend className="skill_leg">Sass</legend></div>
                <div className="skill_child"><img src={cLogo} alt="C Logo"/><legend className="skill_leg">C</legend></div>
                <div className="skill_child"><img src={vscLogo} alt="Visual Studio Code Logo"/><legend className="skill_leg">VSCode</legend></div>
                <div className="skill_child" id="aws_skill"><img src={awsLogo} alt="Amazon Web Services Logo"/><legend className="skill_leg">Amazon Web Services</legend></div>
            </div>
        </div>
    )
}

export default Skills;