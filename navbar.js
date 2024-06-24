function NavBar(){
    return(
      <>

<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" title="This is the home page." data-toggle="tooltip" href="#">BadBank Home Page</a>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a className="nav-link" title="Please create your account here." data-toggle="tooltip" aria-current="page" 
          href="#/CreateAccount/">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" title="Please make a deposit here." data-toggle="tooltip" aria-current="page" href="#/Deposit/">Deposit</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" title="Please make a withdraw here." data-toggle="tooltip" aria-current="page" href="#/Withdraw/">Withdraw</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" title="User data is displayed here." data-toggle="tooltip" href="#/AllData/">All Data</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }