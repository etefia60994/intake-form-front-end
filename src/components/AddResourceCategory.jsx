import React, { useState } from "react"
import ResourceCategoryDS from "../services/ResourceCategoryService"

 const AddResourceCategory = () => {
    const initialResourceCategoryState = {
        id: null,
        resourceName: ""
    }


    const [resourceCategory, setResourceName] = useState(initialResourceCategoryState);
    const [submitted, setSubmitted] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setResourceName({ resourceCategory, [name]: value })
    }

    const saveResourceCategory = () => {
        var data = {
            resourceName: resourceCategory.resourceName
        }
        ResourceCategoryDS.create(data)
            .then(response => {
                setResourceName({
                    resourceName: response.data.resourceName

                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            })
    }

    const newResourceCategory = () => {
        setResourceName(initialResourceCategoryState);
        setSubmitted(false);
    };

    return (<div className="submit-form">
        {submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newResourceCategory}>
                    Add
    </button>
            </div>
        ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="resourceName">Resource Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="resource_name"
                            required
                            value={resourceCategory.resourceName}
                            onChange={handleInput}
                            name="resouceName"
                        />
                    </div>


                    <button onClick={saveResourceCategory} className="btn btn-success">
                        Submit
    </button>
                </div>
            )}
    </div>

    );
};
export default AddResourceCategory;