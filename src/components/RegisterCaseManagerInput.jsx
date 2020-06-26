import React, { useState } from "react";
import RegisterCaseManager from "../services/RegisterCaseManager";

const RegisterInput=()=>{
const initialRegisterCredentials = {
    username:"",
    password:"",
    firstname:"",
    lastname:""

};
const [currentRegisterCredentials, setLoginCredentials] = useState(initialRegisterCredentials);
   

const tryregister =()=>{

    RegisterCaseManager.registerManager(currentRegisterCredentials).then(response=>{
        console.log(response.data);
    }).catch(e=>{
        console.log(e);
        console.log("error");
    }
    );
}   

const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginCredentials({ ...currentRegisterCredentials, [name]: value });
    console.log(currentRegisterCredentials);
};
return (
     <div>
        
             <label>username</label>
             <input 
             onChange={handleInputChange}
            name="username" id="username"
            value={currentRegisterCredentials.username}
            placeholder={currentRegisterCredentials.username}
            />
             <label>password</label>
             <input
             onChange={handleInputChange}
             name="password" id="password" value={currentRegisterCredentials.password}
              placeholder={currentRegisterCredentials.password}/>
              <br />
              <label>first name:</label>
             <input
             onChange={handleInputChange}
             name="firstname" id="firstname" value={currentRegisterCredentials.firstname}
              placeholder={currentRegisterCredentials.firstname}/>
               <label>Last name:</label>
             <input
             onChange={handleInputChange}
             name="lastname" id="lastname" value={currentRegisterCredentials.lastname}
              placeholder={currentRegisterCredentials.lastname}/>
             <button onClick={tryregister}>Submit</button>
         
     </div>
        );
}
export default RegisterInput;