import React, { useState, useEffect } from "react";
import ResourceCategoryDataService from "../services/ResourceCategoryService";

const ResourceCategory = props => {
    const initialResourceCategoryState = {
        id: null,
        resourceName: "",
        
    };
    const [currentResourceCategory, setCurrentResourceCategory] = useState(initialResourceCategoryState);
    const [message, setMessage] = useState("");

    const getResourceCategory = id => {
        ResourceCategoryDataService.get(id)
            .then(response => {
                setCurrentResourceCategory(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getResourceCategory(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentResourceCategory({ ...currentResourceCategory, [name]: value });
    };

    

    const updateResourceCategory = () => {
        ResourceCategoryDataService.update(currentResourceCategory.id, currentResourceCategory)
            .then(response => {
                setMessage("The Resource Category was updated successfully!");
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteResourceCategory = () => {
        ResourceCategoryDataService.remove(currentResourceCategory.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/resourceCategories");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentResourceCategory ? (
                <div className="edit-form">
                    <h4>Resource Category Edit</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Resource Name">Resource Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Resouce Name"
                                name="resourceName"
                                placeholder={currentResourceCategory.resourceName}
                                value={setCurrentResourceCategory.resourceName}
                                onChange={handleInputChange}
                            />
                        </div>

                    </form>

                    <button className="badge badge-danger mr-2" onClick={deleteResourceCategory}>
                        Delete
          </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateResourceCategory}
                    >
                        Update
          </button>
                    <p>{message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Resource Category...</p>
                    </div>
                )}
        </div>
    );
};

export default ResourceCategory;
