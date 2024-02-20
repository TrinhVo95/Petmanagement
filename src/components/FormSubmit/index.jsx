import React, { useState } from "react";
import { FormWrapper } from "./styled";
import Table from "../Table";

const FormSubmit = () => {
  const [formData, setFormData] = useState({
    petID: "",
    petname: "",
    age: "",
    type: "",
    weight: "",
    length: "",
    breed: "",
    vaccinated: "",
    dewormed: "",
    sterilized: "",
  });
  const [error, setError] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError(validate(formData));
    const newFormData = {
      petID: formData.petID,
      petname: formData.petname,
      age: formData.age,
      type: formData.type,
      weight: formData.weight,
      length: formData.length,
      color: formData.color,
      breed: formData.breed,
    };
    // There are errors, don't submit the data
    // if (Object.keys(validate(formData).length >= 0)) {
    //   return newFormData;
    // }
    if (newFormData.length > 0) {
      const newDataArr = [...data, newFormData];
      setData(newDataArr);
    } else {
      setError(validate(formData));
      setFormData(!formData);
    }
    console.log(validate(formData));
    // const newFormData = {
    //   petID: formData.petID,
    //   petname: formData.petname,
    //   age: formData.age,
    //   type: formData.type,
    //   weight: formData.weight,
    //   length: formData.length,
    //   color: formData.color,
    //   breed: formData.breed,
    // };
    // console.log(newFormData);
    // const newDataArr = [...data, newFormData];
    // setData(newDataArr);
  };

  const validate = (value) => {
    const error = {};
    if (value.petID === "") {
      console.log(typeof value.petID);
      error.petID = "Pet ID is required";
    }
    if (value.petname === "") {
      error.petname = "Pet name is required";
    }
    if (value.age === "") {
      error.age = "Pet age is required";
    }
    if (value.weight === "") {
      error.weight = "Pet weight is required";
    }
    if (value.length === "") {
      error.length = "Pet length is required";
    }
    if (value.type === "") {
      error.type = "Type is required";
    }
    if (value.breed === "") {
      error.breed = "Breed is required";
    }
    return error;
  };
  return (
    <FormWrapper>
      <p className="title">Pet Management</p>
      <div className="formSubmit">
        <form action="/" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="petID" className="formLabel">
              Pet ID
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="petID"
                name="petID"
                placeholder="Input ID"
                onChange={handleChange}
                value={formData.petID}
              />
              {error.petID && <small className="error">{error.petID}</small>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="petname" className="formLabel">
              Pet Name
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="petname"
                name="petname"
                placeholder="Input Name"
                onChange={handleChange}
                value={formData.petname}
              />
              {error.petname && (
                <small className="error">{error.petname}</small>
              )}
            </div>
            <label htmlFor="age">Age</label>
            <div>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Input Age"
                name="age"
                onChange={handleChange}
                value={formData.age}
              />
              {error.age && <small className="error">{error.age}</small>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="type" className="formLabel">
              Type
            </label>
            <div>
              <select
                className="form-control"
                id="type"
                name="type"
                onChange={handleChange}
                value={formData.type}
              >
                <option>Select Type</option>
                <option>Dog</option>
                <option>Cat</option>
              </select>
              {error.type && <small className="error">{error.type}</small>}
            </div>
          </div>
          <div className="form-group Input-weight">
            <label htmlFor="weight" className="formLabel">
              Weight
            </label>
            <div>
              <input
                type="number"
                className="form-control"
                id="weight"
                placeholder="Input Weight"
                onChange={handleChange}
                name="weight"
                value={formData.weight}
              />
              {error.weight && <small className="error">{error.weight}</small>}
            </div>

            <label htmlFor="length">Length</label>
            <div>
              <input
                type="number"
                className="form-control"
                id="length"
                placeholder="Input Length"
                onChange={handleChange}
                name="length"
                value={formData.length}
              />
              {error.length && <small className="error">{error.petID}</small>}
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="breed" className="formLabel">
              Breed
            </label>
            <div>
              <select
                className="form-control"
                id="breed"
                name="breed"
                onChange={handleChange}
                value={formData.breed}
              >
                <option>Select Breed</option>
                <option>Tabby</option>
                <option>Domestic Medium Hair</option>
                <option>Mixed Breed</option>
                <option>Domestic Short Hair</option>
                <option>Terrier</option>
                <option>Greyhound</option>
                <option>Persian</option>
                <option>Rottweiler</option>
              </select>
              {error.breed && <small className="error">{error.breed}</small>}
            </div>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              className="custom-control-Input"
              id="Input-vaccinated"
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="Input-vaccinated">
              Vaccinated
            </label>

            <input
              type="checkbox"
              className="custom-control-Input"
              id="Input-dewormed"
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="Input-dewormed">
              Dewormed
            </label>

            <input
              type="checkbox"
              className="custom-control-Input"
              id="Input-sterilized"
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="Input-sterilized">
              Sterilized
            </label>
          </div>
          <button type="submit" className="btn btn-primary" id="submit-btn">
            Submit
          </button>
          <button type="button" className="btn btn-warning" id="healthy-btn">
            Show Healthy Pet
          </button>
        </form>

        <Table datas={data} />
      </div>
    </FormWrapper>
  );
};

export default FormSubmit;
