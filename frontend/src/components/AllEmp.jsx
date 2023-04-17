import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'jquery';


export default function AllEmp(props) {
  console.log(props.emps)
  return (
    <div className="container  has-background-white-ter">
      <h1 className="has-text-centered is-size-3 has-text-info-dark">All Employees</h1>
      {props.emps.map((emp) => {
        return (
          <div className="card mb-2 is-hoverable has-shadow-2xl box-radius-xl" key={emp._id}>
            <div className="card-content">
              <div className="media">
                <figure className="image is-48x48">
                  <img className="is-right" src={emp.profilePic} alt={emp.name} />
                </figure>
              </div>
              <div className="content">
                <div className="is-size-5"><b>Name: </b>{emp.firstName} {emp.lastName}</div>
                <div className="is-size-6"><b>Dept: </b>{emp.dept}</div>
                <div className="is-size-7"><b>Hired Date: </b> {emp.head}</div>

                <time>{emp.age}</time>
                <br />

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
