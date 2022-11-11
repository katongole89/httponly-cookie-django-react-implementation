import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'

const Login = () => {
    return(
        <div className="container">
            <form>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div style={{maginTop:'10px'}}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div>
                        <Button variant="contained">Login</Button>
                    </div>
                    
                </div>
                
            </form>
        </div>
        
            
    )
}

export default Login