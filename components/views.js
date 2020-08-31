class view extends React.Component{
    render(){
        return(
           <div >
               <ul>
                   <li>
                       <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Confirmed</th>
                                    <th scope="col">Deaths</th>
                                    <th scope="col">Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className="table-danger">
                                <td>{this.props.Confirmed}</td>
                                <td>{this.props.Deaths}</td>
                                <td>{this.props.Recovered}</td>
                            </tr>
                            </tbody>
                       </table>
                   </li>
               </ul>
           </div>
        )
    }
}

export default view