import React, { useState } from "react";
import Login from "../services/Login";

const LoginInput=()=>{
const initialLoginCredentials = {
    username:"",
    password:""
};
const [currentLoginCredentials, setLoginCredentials] = useState(initialLoginCredentials);
   

const tryLogin =()=>{

    Login.login(currentLoginCredentials).then(response=>{
        console.log(response.data);
        console.log(response);
    }).catch(e=>{
        console.log(e);
        console.log("error");
    }
    );
}   

const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginCredentials({ ...currentLoginCredentials, [name]: value });
    console.log(currentLoginCredentials);
};
return (
     <div>
        
             <label>username</label>
             <input 
             onChange={handleInputChange}
            name="username" id="username"
            value={currentLoginCredentials.username}
            placeholder={currentLoginCredentials.username}
            />
             <label>password</label>
             <input
             onChange={handleInputChange}
             name="password" id="password" value={currentLoginCredentials.password}
              placeholder={currentLoginCredentials.password}/>
             <button onClick={tryLogin}>Submit</button>
         
     </div>
        );
}
export default LoginInput;
