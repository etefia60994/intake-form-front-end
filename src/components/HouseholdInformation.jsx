import React, { useState } from "react";

const HouseHoldInfo = props => {
    const emptyHouseholdInfoForm = 
   {
        householdSize: '',
        numberofSeniors: '',
        numberofAdults: '',
        numberofYouth: '',
        numberofChildren: '',
        numberofInfants:'',
        currentlyPregnant:'',
        pregnantMember:''

    };
    const[HouseHoldInfo, setHouseHoldInfo] = useState(emptyHouseholdInfoForm);

// eslint-disable-next-line
   const getContactInfo = id =>{
       ContactInfoDataService.get(id).then(response => {
        setContactInfo(response.data);
        console.log(response.data)
   }).catch (e => {console.log(e)})}

//    useEffect(() => { 
//     getContactInfo(props.match.params.id);
//     }, [props.match.params.id]);

// eslint-disable-next-line
const handleInputChange = event => {
    const { name, value } = event.target;
    setHouseHoldInfo({ ...HouseHoldInfo, [name]: value });
};

    return (
        <div>
            <form>
            
                <label className="col-sm-2 col-form-label">
                    Household Size:</label>
                <input className="form-control" type="radio" name="FirstName" value={setContactInfo.First} />
                <br></br>
                <label>
                    Number of Seniors:
                    <input className="form-control"  type="text" name="LastName" value={setContactInfo.Last} />
                </label>
                <br></br>
                <label>
                    Number of Adults:
                    <input className="form-control"  type="text" name="Address" value={setContactInfo.Address} />
                </label>
                <br></br>
                <label>
                    Number of Youth:
                    <input className="form-control"  type="text" name="ZIP" value={setContactInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    Number of Infants:
                    <input className="form-control"  type="text" name="State" value={setContactInfo.State} />
                </label>
                <br></br>
                <label>
                    Is anyone in the house currently pregnant?:
                    <input className="form-control"  type="text" name="phoneNumber" value={setContactInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    If so, who?:
                    <input className="form-control"  type="text" name="altPhoneNumber" value={setContactInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    E-mail:
                    <input className="form-control"  type="text" name="email" value={setContactInfo.ZIP} />
                </label>
            </form>
            <a href="/clientInfo/">
            <button className="btn btn-primary">Next</button>
            </a>
        </div>
    )
}
export default ContactInfo