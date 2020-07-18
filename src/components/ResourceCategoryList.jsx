import React, { useState, useEffect } from "react"
import ResourceCategoryDS from "../services/ResourceCategoryService"
import { Link } from "react-router-dom";

const ResourceCategoryList = () => {
  const [resourceCategories, setResourceCategories] = useState([]);
  const [currentRC, setCurrentRC] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [searchResourceName, setSearchResouceName] = useState("")

  useEffect(() => {
    retrieveResourceCategories();
  }, [])

  const onChangeResourceName = e => {
    const searchResourceName = e.target.value;
    setSearchResouceName(searchResourceName)
  };

  const retrieveResourceCategories = () => {
    ResourceCategoryDS.getAll()
      .then(response => {
        setResourceCategories(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  };

  // const refreshList = () =>{
  //     retrieveResourceCategories();
  //     setCurrentRC(null);
  //     setCurrentIndex(-1);
  // };

  const setActiveResourceCategory = (resourceCategory, index) => {
    setCurrentIndex(index)
    setCurrentRC(resourceCategory)
  };

  const findByResourceName = () => {
    ResourceCategoryDS.findByResourceName(searchResourceName)
      .then(response => {
        setResourceCategories(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Resource Name"
            value={searchResourceName}
            onChange={onChangeResourceName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByResourceName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Resource Categories List</h4>

        <ul className="list-group">
          {resourceCategories &&
            resourceCategories.map((resourceCategory, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveResourceCategory(resourceCategory, index)}
                key={index}
              >
                {resourceCategory.resourceName}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
          {currentRC ? (
            <div>
              <h4>Resource Category</h4>
              <div>
                <label>
                  <strong>Resource Name:</strong>
                </label>{" "}
                {currentRC.resourceName}
              </div>
              <Link
                to={"/resourceCategories/" + currentRC.id}
                className="badge badge-warning"
              >
                Edit
            </Link>
            </div>
          ) : (
              <div>
                <br />
                <p>Please click on a Resource Category...</p>
              </div>
            )}
        </div>
    </div>

  );
}
export default ResourceCategoryList