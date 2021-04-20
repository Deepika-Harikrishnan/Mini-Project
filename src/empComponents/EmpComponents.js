import React from 'react';
import empUser from '../export/EmpUser';


class EmpComponents extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            emps:[]
        }
        
    }
    componentDidMount(){
        empUser.getUsers().then((Response) =>{
            this.setState({emps:Response.data})
        });
    }
    render(){
        return(
            <div>
                
                
                <h1 className = "text-center">Employee Details</h1>
                <table className = "table table-hover table-bordered table-striped">
                    <thead className="table thead-light">
                        <tr>
                            <th>Emp Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.emps.map(
                                emp =>
                                <tr key = {emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.state}</td>
                                    <td>{emp.country}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default EmpComponents