import { Project } from './item';
import addIcon from './assets/imgs/addSide.svg';


let sidebarCont = ` <div>
                        <h2>Projects</h2>
                        <button id="project-add">
                            <img src=${addIcon}>
                        </button>
                    </div>
                    <div id="project-list"></div>`;


export default sidebarCont