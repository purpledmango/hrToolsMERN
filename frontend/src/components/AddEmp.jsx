import axios from 'axios';
import React, { useEffect, useState } from 'react';


function AddEmp(props) {

  

  const [newEmp, setNewEmp]= useState({
    firstName: "",
    age: 0,
    contactNo: 0,
    profilePic: "",
  });

  // Handle Form Submission
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', newEmp.firstName)
    formData.append('age', newEmp.age)
    formData.append('contactNo', newEmp.contactNo)
    formData.append('profilePic', newEmp.profilePic)
    // formData.append('')
    for (const [key, value] of formData.entries()){
      console.log(`${key} : ${value}`)
    }
    // const addEmp = {
    //   firstName: newEmp.firstName,
    //   age: Number(newEmp.age),
    //   contactNo: Number(newEmp.contactNo),
    //   profilePic: newEmp.profilePic,
    
    try{
      await axios.post('http://localhost:8000/api/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
    catch (err){
      console.log(err);
    }
  }

  async function handleChange(e){
    // e.preventDefault();
    setNewEmp(()=> {return {...newEmp, [e.target.name]: e.target.value}})
  };
  console.log(newEmp)

  return (
    <div className='box has-background-white-ter'>
      <form className="my-6 py-2 " method='post'>
        <h1 className=" is-size-4 pb-3 has-text-centered has-text-info-dark"> Add New Employee </h1>

        <div className="container box p-6 has-text-info-dark">
        
          <div className="field">
            <label htmlFor='name' className="label has-text-info-dark">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={newEmp.name}
                name='name'
                placeholder="Employee's Name"
                onChange={handleChange}
              />
            </div>
          </div>
                
          <div className="field">
            <label htmlFor="email" className="label has-text-info-dark">Email</label>
            <div className="control">
              <input id='phone'
                className="input"
                type="email"
                value={newEmp.email}
                name='email'
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="phone" className='label has-text-info-dark'>Phone Number</label>
            <div className="control">
            <input className='input' name="phone" type="tel" placeholder='+91-90XXXXXXX'/>
            </div>
          </div>

          <div className="field">
            <label htmlFor="image" className="label has-text-info-dark">Employee Image</label>
            <div className="control">
            <input
                className="input"
                type="file"
                value={newEmp.image}
                name='email'
                placeholder="Image"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="dob" className="label has-text-info-dark">Date of Birth</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Bith Day"
                value={newEmp.dob}
                name="dob"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="address" className="label has-text-info-dark">Address</label>
            <div className="control">
              <textarea style={{height:"8rem"}}
                className="input"
                type="textarea"
                placeholder="St. 12, Nehru Place, New Delhi, Pin code: 200120"
                value={newEmp.address}
                name="address"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="hiredDate" className="label has-text-info-dark">Hired Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
              
                value={newEmp.hiredDate}
                name="hiredDate"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="salary" className="label has-text-info-dark">Salary ₹</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="50000"
                value={newEmp.salary}
                name="hiredDate"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="supervisor" className="label has-text-info-dark">Supervisor</label>
            <div className="control">
              <div className='select'>
                <select>
                  <option>Mr. Verma</option>
                  <option>Amit Upadhyay</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="salary" className="label has-text-info-dark">Department</label>
            <div className="control">
            <div className='select'>
                <select>
                  <option>Finance</option>
                  <option>Support</option>
                  <option>Development</option>
                </select>
              </div>
          </div>
        </div>

        <div class="field">

          <label htmlFor="" className="label has-text-info-dark">Employee Serving Notice Period?</label>
          <div class="control">
            <label class="radio">
              <input type="radio" name="question"/>
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question"/>
              No
            </label>
          </div>
        </div>

        <div class="field">

          <label htmlFor="" className="label has-text-info-dark">Employee On Board?</label>
          <div class="control">
            <label class="radio">
              <input type="radio" name="question"/>
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question"/>
              No
            </label>
          </div>
        </div>

          <div className="field has-text-centered">
            <button className="button has-background-link has-text-white-bis is-hoverable" onClick={handleSubmit}>
            Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddEmp;
  