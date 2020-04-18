import React from 'react';
import ProjectLogo from './ProjectLogo';
import './ProjectManagementSystem.css';


class ProjectManagementSystem extends React.Component{
    render(){
        return(
            <div>
              <h2> <ProjectLogo/><span className="title">Project Management System </span></h2>
            </div>
        )
    }

}
export default ProjectManagementSystem;