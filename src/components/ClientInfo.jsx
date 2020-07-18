import React, {useState} from React

function ClientForm (){
    const [ClientInfo, setClientInfo]=useState({
        id: null
        Date:'',
        Marital:'',
        Sex:'',
        Race:'',
        Age:'',
        CaseManager:'',
        Resources:[] 
    });
    return(
        <div>
            <label>
                Marital Status:
                <select className="form-control"  name="MaritalStatus" value={setClientInfo.Marital}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Separated">Separated</option>
                    <option value="Widowed">Widowed</option>
                </select>
            </label>
            <label>
               Sex:
                <select className="form-control"  name="Sex" value={setClientInfo.Sex}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <label>
                Race:
                <select className="form-control" name="Race" value={setClientInfo.Race}>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Asian">Asian</option>
                    <option value="American Indian">American Indian</option>
                    <option value="TwoOrMore">Two or More</option>
                    <option value="Other">Other</option>
                </select>

            </label>
        </div>
    )
}