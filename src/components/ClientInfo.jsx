import React, { useState } from "react";
import ContactInfoService from "../services/ContactInfoService";

const ClientForm = (props) => {
    let currentDate = new Date().toJSON().slice(0, 10);

    const [ClientInfo, setClientInfo] = useState({
        id: null,
        firstName: '',
        lastName: '',
        address: '',
        state: '',
        zip: null,
        phoneNumber: '',
        altPhoneNumber: '',
        email: '',
        Date: currentDate,
        maritalStatus: '',
        sex: '',
        race: '',
        age: '',
        caseManagerID: null,
        Resources: []
    });


    // eslint-disable-next-line
    const handleInputChange = event => {
        const { name, value } = event.target;
        setClientInfo({ ...ClientInfo, [name]: value });
    };

    const saveClientInfo = () => {
        var data = {
            firstName:ClientInfo.firstName,
            lastName: ClientInfo.lastName,
            address: ClientInfo.address,
            state: ClientInfo.state,
            zip: ClientInfo.zip,
            phoneNumber: ClientInfo.phoneNumber,
            altPhoneNumber: ClientInfo.altPhoneNumber,
            email: ClientInfo.email,
            Date: ClientInfo.Date,
            maritalStatus: ClientInfo.maritalStatus,
            sex: ClientInfo.sex,
            race: ClientInfo.race,
            age: ClientInfo.age,
            caseManagerID: 1,        }
        ContactInfoService.create(data)
            .then(response => {
                setClientInfo({
                    resourceName: response.data.resourceName,
                    firstName:response.data.firstName,
                    lastName: response.data.lastName,
                    address: response.data.address,
                    state: response.data.state,
                    zip: response.data.zip,
                    phoneNumber: response.data.phoneNumber,
                    altPhoneNumber: response.data.altPhoneNumber,
                    email: response.data.email,
                    Date: response.data.Date,
                    maritalStatus: response.data.maritalStatus,
                    sex: response.data.sex,
                    race: response.data.race,
                    age: response.data.age,
                    caseManagerID: 1,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <div>
            <form>
            <label className="col-sm-2 col-form-label">
                first Name:</label>
            <input onChange={handleInputChange} className="form-control" type="text" name="firstName" value={setClientInfo.first} />
            <br></br>
            <label>
                last Name:
                <input onChange={handleInputChange} className="form-control" type="text" name="lastName" value={setClientInfo.last} />
            </label>
            <br></br>
            <label>
                address:
                <input onChange={handleInputChange} className="form-control" type="text" name="address" value={setClientInfo.address} />
            </label>
            <br></br>
            <label>
                state:
                <input onChange={handleInputChange} className="form-control" type="text" name="state" value={setClientInfo.state} />
            </label>
            <br></br>
            <label>
                zip:
                <input onChange={handleInputChange} className="form-control" type="text" name="zip" value={setClientInfo.zip} />
            </label>
            <br></br>
            <label>
                Phone Number:
                <input onChange={handleInputChange} className="form-control" type="text" name="phoneNumber" value={setClientInfo.phoneNumber} />
            </label>
            <br></br>
            <label>
                Alternate Phone Number:
                <input onChange={handleInputChange} className="form-control" type="text" name="altPhoneNumber" value={setClientInfo.altPhoneNumber}/>
            </label>
            <br></br>
            <label>
                E-mail:
                <input onChange={handleInputChange} className="form-control" type="text" name="email" value={setClientInfo.email} />
            </label>
            <label>
                Marital Status:
                <select onChange={handleInputChange} className="form-control" name="maritalStatus" value={setClientInfo.maritalStatus}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Separated">Separated</option>
                    <option value="Widowed">Widowed</option>
                </select>
            </label>
            <br></br>
            <label>
                sex:
                <select onChange={handleInputChange} className="form-control" name="sex" value={setClientInfo.sex}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <br></br>
            <label>
                race:
                <select onChange={handleInputChange} className="form-control" name="race" value={setClientInfo.race}>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Asian">Asian</option>
                    <option value="American Indian">American Indian</option>
                    <option value="TwoOrMore">Two or More</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <br></br>
            <label>
                age:
                <input onChange={handleInputChange} className="form-control" type="text" name="age" value={setClientInfo.age} />
            </label>
            <label>
                Case Manager:
                <input required='true' onChange={handleInputChange} className="form-control" type="text" name="caseManagerID" value={setClientInfo.caseManagerID} />
            </label>
            </form>
            <div className="row">
                <a href="/contactInfo/">
                    <button className="btn btn-primary col-md-6" >Back</button>
                </a>
                <button onClick={saveClientInfo} className="btn btn-success">
                        Submit
    </button>
            </div>
        </div>
    )
}
export default ClientForm