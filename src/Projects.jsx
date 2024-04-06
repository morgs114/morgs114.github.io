import calculator from "./Calculator.png";
import randomQG from "./randomQGen.png";
import pClock from "./PomodoroClock.png";
import drumMac from "./Drum Machine.png";

function Projects() {
    return (
        <div id="projects">
            {/*Code grid to be responsive!*/}
            <h2>My Projects</h2>
            <div id="projects_container">
                <div className="project_child">
                    <div className="project"><a href="https://codepen.io/morgsksm/full/MWxmGEg" target="_blank"><img class="projectScreenshot" src={drumMac} alt="Screenshot of Drum Machine App"/></a></div>
                    <legend>
                    <a href="https://codepen.io/morgsksm/full/MWxmGEg" target="_blank"><button class="view_project" title="Open project on CodePen">View</button></a>
                    Drum Machine: plays sound when button clicked or specific key pressed. Created for freeCodeCamp.
                    </legend> 
                </div>
                <div className="project_child">
                    <div className="project"><a href="https://codepen.io/morgsksm/full/PoLWJaG" target="_blank"><img class="projectScreenshot" src={randomQG} alt="Screenshot of Random Quote Generator App"/></a></div>
                    <legend>
                    <a href="https://codepen.io/morgsksm/full/PoLWJaG" target="_blank"><button class="view_project">View</button></a>
                    Random Quote Generator: randomly selects a quote to display on load and when button clicked. Created for freeCodeCamp.
                    </legend>
                </div>
                <div className="project_child">
                    <div className="project"><a href="https://codepen.io/morgsksm/full/gOEGaKO" target="_blank"><img class="projectScreenshot" src={pClock} alt="Screenshot of Pomodoro Clock App"/></a></div>
                    <legend>
                        <a href="https://codepen.io/morgsksm/full/gOEGaKO" target="_blank"><button class="view_project" title="Open project on CodePen">View</button></a>
                        Pomodoro Clock: study timer in which session and break times are set by the user. Created for freeCodeCamp.
                    </legend>
                </div>
                <div className="project_child">
                    <div className="project"><a href="https://codepen.io/morgsksm/full/qBvjPLK" target="_blank"><img class="projectScreenshot" src={calculator} alt="Screenshot of Calculator App"/></a></div>
                    <legend>
                    <a href="https://codepen.io/morgsksm/full/qBvjPLK" target="_blank"><button class="view_project" title="Open project on CodePen">View</button></a>
                    Calculator: addition, subtraction, multiplication and division functionality. Created for freeCodeCamp.
                    </legend>
                </div>
            </div>
        </div>
    )
}

export default Projects;