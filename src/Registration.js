import React, { Component } from "react";

export class Registration extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading">Registration Form</div>
        <hr />

        <div class="body">
          <div class="row">
            <div class="col-25">Name:</div>
            <div class="col-75">
              <input type="text" name="n1" placeholder="Enter your name" />
            </div>
          </div>
          <div class="row">
            <div class="col-25"> Email: </div>
            <div class="col-75">
              <input type="email" name="n2" placeholder="Enter your email" />
            </div>
          </div>
          <div class="row">
            <div class="col-25"> Gender:</div>
            <div class="col-75">
              <input type="radio" name="r1" />
              Male
              <input type="radio" name="r1" />
              Female
            </div>
          </div>
          <div class="row">
            <div class="col-25"> Birthdate:</div>
            <div class="col-75">
              <input type="date" name="n2" />
            </div>
          </div>
          <div class="row">
            <div class="col-25"> Course:</div>
            <div class="col-75">
              <select name="s1">
                <option>Select</option>
                <option>MERN Stack</option>
                <option>Dot Net</option>
                <option>Java</option>
                <option>Python</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25"> Phone:</div>
            <div class="col-75">
              <input type="number" name="n2" placeholder="Enter your number" />
            </div>
          </div>
          <div class="row">
            <div class="col-25"> Address:</div>
            <div class="col-75">
              <textarea rows="2" cols="27" name="n3" />
            </div>
          </div>
          <button type="button" value="submit" class="btn btn-success">
            Submit
          </button>{" "}
          &nbsp;
          <button type="button" value="reset" class="btn btn-danger">
            Reset
          </button>
          <hr />
          <div class="container signin">
            <p>
              Already have an account?{" "}
              <a href="#">
                <u>Sign in</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
