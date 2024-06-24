function Home(){
    //const ctx = React.useContext(UserContext);  
    return (
        <Card 
            textAlign="center"
            bgcolor="primary"
            txtcolor="white"
            header="Welcome to the BadBank Project"
            title="For All Your Banking Needs"
            //text="You can use this bank"
            bodyAlign="center"
            headerDisplay='flex'
            headerJustifyContent='center'
            titleDisplay='flex'
            titleJustify='center'
            body={(<img src="bank.jpg" className="img-fluid"
            alt="Responsive image"/>)}
     // <>
      //<h1>Home<br/>
      //  {JSON.stringify(ctx)}
      //</h1>
     // </>
      />
    );  
  }

 


