import { Project } from './item';
import addIcon from './assets/imgs/add.svg';


let sidebarCont = ` <div>
                        <h2>Projects</h2>
                        <div id="project-add">
                            <svg src=${addIcon} fill="#303841"></svg>
                        </div>
                    </div>
                    <div id="project-list"></div>`;


export default sidebarCont