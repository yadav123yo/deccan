

function Logo(){

   
    return(
        <div className="Logo">
            <div className="Logo1">
            <div><img src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg" alt="LOGO"></img></div>
            <div><p>{new Date().toDateString()}</p></div>
            </div>
        </div>
    )
}

export default Logo