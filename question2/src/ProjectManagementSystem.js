import React from 'react';
import ProjectLogo from './ProjectLogo';
import SearchComponent from './SearchComponent'
import HeaderComponent from './HeaderComponent'
import ProjectDetailsComponent from './ProjectDetailsComponent'
import './ProjectManagementSystem.css';


class ProjectManagementSystem extends React.Component {
    render() {
        var projects=[
            {
                Id: 1,
                Name: "TCI",
                scrumMasterName: "Vishal",
                teamMemberCount:20

            },
            {
                Id: 2,
                Name: "JD",
                scrumMasterName: "Tejashree",
                teamMemberCount:10
            },
            {
                Id: 3,
                Name: "John deere",
                scrumMasterName: "Monika",
                teamMemberCount:30
            },
            {
                Id: 4,
                Name: "Yash",
                scrumMasterName: "Bhagyashree",
                teamMemberCount:20
            }
        ]
        return (
            
            <div>
                    <div><ProjectLogo /></div>
                    <div>
                    <SearchComponent/>
                    </div>
                    <div>
                    <HeaderComponent/>
                    </div><br></br>
                    <div>
                    <table>
                    {
                        projects.map((project)=>{
                           return <ProjectDetailsComponent key={project.Id} project={project}/>
                        })
                    }
                    </table>
                    </div>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    
                    </div>
        )
    }
}
export default ProjectManagementSystem;