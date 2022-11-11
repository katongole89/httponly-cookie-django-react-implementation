import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'

const Login = () => {

    const [state, setState] = useState({
        username:'',
        password:''
    })

    const handleChange = (e) =>{
        setState({...state, [e.target.name]:e.target.value})
    }




    return(
        <div className="container">
            <form>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" name='username' />
                    </div>
                    <div style={{maginTop:'10px'}}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" name='password'/>
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