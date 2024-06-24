
function Withdraw(){

    // create variable for user context:
    const ctx = React.useContext(UserContext);

    // get variables for current user:
    let arrayLength = ctx.users.length;     // get array length
    let currentIndex = arrayLength - 1;     // get index of current user
    //let currentUser = ctx.users.at(currentIndex).name;  // get name of current user
    let currentBalance = ctx.users.at(currentIndex).balance // get balance of current user

    // for troubleshooting and testing
   // console.log(`current user : ${currentUser}`)
   // console.log(`current balance : ${currentBalance}`)

    // create react state variables
    const [show, setShow]          = React.useState(true);
    const [withdraw, setWithdraw]  = React.useState('');
    const [status, setStatus]     = React.useState();
    //const [user, setUser]         = React.useState(currentUser);
    const [balance, setBalance]    = React.useState(currentBalance);

    // input validation
    function validate(amount) {

       /*  if (!amount) {
            setStatus('Error: Please provide a monetary amount.');
            setTimeout(() => setStatus(''), 3000);
            setWithdraw('');
            return false;
        } */
       /*   if (amount < 0) {
            setStatus('Error: Negative Withdrawal amount.');
            setTimeout(() => setStatus(''), 3000);
            setWithdraw('');
            return false;
        } */
         if (amount == 0 || amount < 0) {
            setStatus('Error Encountered: Please enter a number greater than 0.');
            setTimeout(() => setStatus(''), 3000);
            setWithdraw('');
            return false;
        }
        else if (isNaN(amount)) {
            setStatus('Error Encountered: Please provide a valid number.');
            setTimeout(() => setStatus(''), 3000);
            setWithdraw('');
            return false;
        }
         else if (amount - 0.001 > currentBalance) {
            setStatus('Error: Account Overdraft Amount.');
            setTimeout(() => setStatus(''), 3000);
            setWithdraw('');
            return false;
        } 
        return true;
    }

    // This function performs input validation on the withdrawal amount
    // This function handles the updating of the current user's balance
    function handleWithdraw() {

        if (!validate(withdraw)) return;

        let stringBalance = parseFloat(balance).toFixed(2);
        let numBalance = parseFloat(stringBalance);

        let stringWithdraw = parseFloat(withdraw).toFixed(2);
        let numWithdraw = parseFloat(stringWithdraw);

        let newBalance = numBalance - numWithdraw;
        newBalance = parseFloat(newBalance).toFixed(2);

        setBalance(newBalance);
        setShow(false);

        // update current user's balance
        ctx.users.at(currentIndex).balance = newBalance;
        // for troubleshooting and testing
        //console.log(`Withdraw Amount: $${withdraw}`, `New Balance: $${newBalance}`);

    }



    function clearForm() {
        setWithdraw('');
        setShow(true);
    }


    return (
        <Card
            textAlign="center"
            bgcolor="primary"
            txtcolor="white"
            header="Please make a Withdraw here"
            status={status}
            
            body={show ? ( 
              
                <>
                <img src="withdraw.jpg" className="img-fluid"
                alt="Responsive image"/>
                    Your Current Balance is: ${balance}<br/><br/>
                    Withdraw Amount:<br/>
                    
                    <input type="input" className="form-control" id="deposit" 
                    placeholder="Amount you want to Withdraw" value={withdraw} 
                    onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                   
                   <button type="submit" className="btn btn-success" disabled={!withdraw} 
                    onClick={handleWithdraw}>Withdraw</button>
                </>
                
            ):
            
            (
                <>
                    <h5>Deposit Successful</h5>
                    Your Current Balance is: ${balance}<br/><br/>
                    <button type="submit" className="btn btn-success" 
                    onClick={clearForm}>Click here to make another withdraw.</button>
                </>
            )}
        />
    );
  }
/* 
    return (
        <Card
            bgcolor="info"
            txtcolor="black"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    Balance: ${balance}<br/><br/>
                    Withdraw Amount:<br/>
                    
                    <input type="input" className="form-control" id="withdraw" 
                    placeholder="Withdraw Amount" value={withdraw} onChange={e => 
                    setWithdraw(e.currentTarget.value)}/><br/>
                    
                    <button type="submit" className="btn btn-light" disabled={!withdraw} 
                    onClick={handleWithdraw}>Withdraw</button>
                </>
            ):(
                <>
                    <h5>Withdraw Successful</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Request another withdrawal</button>
                </>
            )}
        />
    );
}  */