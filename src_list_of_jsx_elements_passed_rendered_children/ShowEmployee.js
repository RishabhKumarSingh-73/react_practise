export function ShowEmployee(props){

    return(
        <div >
            <div className="row">
                <span style={{height:50}}></span>
                <h1>Employee details</h1>
                <span style={{height:50}}></span>
            </div>
            <div className="row">
                <div className="container col-md-6">
                    <table className="table table-striped"><tbody>{props.tableRows}</tbody></table>
                </div>
            </div>
            <div className="row">
                <span style={{height:50}}></span>
                <h1>Department List</h1>
                <span style={{height:50}}></span>
            </div>
            <div className="row">
                <div className="container col-md-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}