import React, { useState } from "react";

function ContactInfo() {
    const [ContactForm, setInfo] = useState({
        First: '',
        Last: '',
        Address: '',
        Zip: null,
        State: ''

    });

    return (
        <div>
            <form>
                <label className="col-sm-2 col-form-label">
                    First Name:</label>
                <input className="form-control" type="text" name="FirstName" value={setInfo.First} />
                <br></br>
                <label>
                    Last Name:
                    <input className="form-control"  type="text" name="LastName" value={setInfo.Last} />
                </label>
                <br></br>
                <label>
                    Address:
                    <input className="form-control"  type="text" name="Address" value={setInfo.Address} />
                </label>
                <br></br>
                <label>
                    ZIP:
                    <input className="form-control"  type="text" name="ZIP" value={setInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    State:
                    <input className="form-control"  type="text" name="State" value={setInfo.State} />
                </label>
            </form>
        </div>
    )
}
export default ContactInfo;