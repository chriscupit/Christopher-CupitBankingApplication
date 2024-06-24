/* function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }
 */

  function AllData(){
    //console.log('All Data page Now');

     // user context variable
    const allData = React.useContext(UserContext);    

    return (
        <>
            <div className="container">
              <center>
                <h1 className="text text-success text-center ">Bad Bank User Profiles</h1>
               
                <table className="table table-hover table-primary border-primary mb-3" >
                    <thead className="table-secondary border-primary mb-3">
                    <tr>
                        <th data-field="id" scope="col" className="text text-success text-center">Account ID</th>
                        <th data-field="name" scope="col" className="text text-success text-center">Name</th>
                        <th data-field="email" scope="col"  className="text text-success text-center">Email</th>
                        <th data-field="password" scope="col"  className="text text-success text-center">Password</th>
                        <th data-field="balance" scope="col"  className="text text-success text-center">Balance</th>
                    </tr>
                    </thead>
                    <colgroup className="text-center border-dark mb-3">
                        <col width="5%"/>
                        <col width="15%"/>
                        <col width="25%"/>
                        <col width="15%"/>
                        <col width="15%"/>
                    </colgroup>
                    <tbody id="table-body border-dark mb-3" >
                        {allData.users.map((value, index) => (
                            <tr key={index}>
                                <td className="text-center">{index}</td>
                                <td className="text-center">{value.name}</td>
                                <td className="text-center">{value.email}</td>
                                <td className="text-center">{value.password}</td>
                                <td className="text text-success text-center">{`$ ${parseFloat(value.balance).toFixed(2)}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </center>
            </div>
        </>
    );
}
  