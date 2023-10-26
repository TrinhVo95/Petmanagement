import React from "react";
import { FormWrapper } from "./styled";

const FormSubmit = () => {
  return (
    <FormWrapper>
      <p className="title">Pet Management</p>
      <div className="formSubmit">
        <form action="/">
          <div className="form-group">
            <label for="input-id" className="formLabel">
              Pet ID
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                id="input-id"
                placeholder="Input ID"
              />
              <small>Errow message</small>
            </div>
          </div>
          <div className="form-group">
            <label for="input-name" className="formLabel">
              Pet Name
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                id="input-name"
                placeholder="Input Name"
              />
            </div>
            <label for="input-age">Age</label>
            <div>
              <input
                type="number"
                class="form-control"
                id="input-age"
                placeholder="Input Age"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="input-type" className="formLabel">
              Type
            </label>
            <div>
              <select class="form-control" id="input-type">
                <option>Select Type</option>
                <option>Dog</option>
                <option>Cat</option>
              </select>
            </div>
          </div>
          <div className="form-group input-weight">
            <label for="input-weight" className="formLabel">
              Weight
            </label>
            <div>
              <input
                type="number"
                class="form-control"
                id="input-weight"
                placeholder="Input Weight"
              />
            </div>

            <label for="input-length">Length</label>
            <div>
              <input
                type="number"
                class="form-control"
                id="input-length"
                placeholder="Input Length"
              />
            </div>
          </div>
          <div className="form-group ">
            <label className="formLabel">Color</label>
            <div className="input-color">
              <input type="color" className="form-control" id="input-color-1" />
            </div>
            <label for="input-breed">Breed</label>
            <div>
              <select class="form-control" id="input-breed">
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
            </div>
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              class="custom-control-input"
              id="input-vaccinated"
            />
            <label class="custom-control-label" for="input-vaccinated">
              Vaccinated
            </label>

            <input
              type="checkbox"
              class="custom-control-input"
              id="input-dewormed"
            />
            <label class="custom-control-label" for="input-dewormed">
              Dewormed
            </label>

            <input
              type="checkbox"
              class="custom-control-input"
              id="input-sterilized"
            />
            <label class="custom-control-label" for="input-sterilized">
              Sterilized
            </label>
          </div>
          <button type="button" class="btn btn-primary" id="submit-btn">
            Submit
          </button>
          <button type="button" class="btn btn-warning" id="healthy-btn">
            Show Healthy Pet
          </button>
        </form>
      </div>
    </FormWrapper>
  );
};

export default FormSubmit;
