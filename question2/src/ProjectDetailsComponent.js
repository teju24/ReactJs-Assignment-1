import React from 'react';


class ProjectDetailsComponent extends React.Component {


    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.project.Id}</td>
                    <td>{this.props.project.Name}</td>
                    <td>{this.props.project.scrumMasterName}</td>
                    <td>{this.props.project.teamMemberCount}</td>
                </tr>
            </tbody>
        )
    }
}


export default ProjectDetailsComponent;