import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './Login.css'
import axios from "axios";

const Login = () => {

    const [state, setState] = useState({
        username:'',
        password:'',
        isSubmitting:false
    })

    const handleChange = (e) =>{
        setState({...state, [e.target.name]:e.target.value})
    }

    const handleSubmit = () => {
        // e.preventDefault();
        setState({...state, isSubmitting:true})
    }


    // const loginRequest = async () => {
    //     try {
    //       const res = await axios.post(
    //         "http://127.0.0.1:8000/api/test-apis/login/",
    //         {
    //           username:state.username,
    //           password:state.password,
    //         },
    //         { withCredentials: true }
    //       );
    //       console.log(res.data);
          
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     setState({...state, isSubmitting:false})

    // };

    // const loginRequest = async () => {
    //     try {
    //       const res = await axios.post(
    //         "http://127.0.0.1:8000/api/test-apis/login/",
    //         {
    //           username:state.username,
    //           password:state.password,
    //         },
    //         { withCredentials: true }
    //       );
    //       console.log(res.data);
          
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     setState({...state, isSubmitting:false})

    // };

    const loginRequest = async () => {
        fetch("http://127.0.0.1:8000/api/test-apis/login/",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'credentials' : 'include'
            },
            method: "POST",
            body: JSON.stringify({
                username:state.username,
                password:state.password,
              },)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
        setState({...state, isSubmitting:false})

    };

    
    

    useEffect(()=>{
        console.log(state)
        if(state.isSubmitting){
            loginRequest()
        }
    }, [state.isSubmitting])






    return(
        <div className="container">
            {/* <form onSubmit={(e)=>handleSubmit(e)}> */}
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <TextField id="outlined-basic" label="Username" variant="outlined" name='username' onChange={handleChange} />
                    </div>
                    <div style={{maginTop:'10px'}}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" name='password' onChange={handleChange} />
                    </div>
                    <div>
                        <Button variant="contained" type='submit' onClick={handleSubmit}>
                            {state.isSubmitting?
                                <CircularProgress />
                                :
                                <span>Login</span>
                            }
                            
                        </Button>
                    </div>
                    
                </div>
                
            {/* </form> */}
        </div>
        
            
    )
}

export default Login