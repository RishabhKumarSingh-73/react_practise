import { ShowEmployee } from "./ShowEmployee"

export function Employee(props){

    const employeeData = [
        {id:101,ename:"rishi",dept:"dev"},
         {id:102,ename:"praj",dept:"testing"},
          {id:103,ename:"suri",dept:"dev"},
           {id:104,ename:"barani",dept:"hr"},
    ]

    const tableRows = employeeData.map((emp)=>{
            return <tr key={emp.id}><td>{emp.id}</td><td>{emp.ename}</td><td>{emp.dept}</td></tr> 
        })
    

    return(
        <ShowEmployee tableRows = {tableRows}>{props.children}</ShowEmployee>
    )
}