function Spa() {
    return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'Chris',email:'email@email.com',password:'12345',balance:'0'}]}}>              
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }

 
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );

