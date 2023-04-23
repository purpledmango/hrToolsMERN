import "../style.css";
import empData from "../data/employee.json";
import { RxDotsVertical } from "react-icons/rx";
import { useEffect, useState } from "react";
import $ from "jquery";

const Emp = () => {
  const [emps, setEmps] = useState([]);
  useEffect(() => {
    setEmps(empData);
    $("#add-employee").hide();
  }, []);

  return (
    <div className="grid  justify-center w-screen items-center md:grid-cols-1 lg:grid-cols-5 md:pb-6">
      <div className="col-span-1 w-full h-screen bg-[var(--base-color)] text-white hidden lg:block">
        <div className="my-4 h-full">
          <p className="text-center text-4xl  italic font-light">
            Hello, Nitish
          </p>
          <div className="flex flex-col justify-center items-center py-2 gap-4">
            <h2 className="font-thin italic text-xl flex justify-start">
              Your Apps
            </h2>
            <div>Timer</div>
            <div>Projects</div>
            <div className="">Reports</div>
          </div>
          <div className="flex flex-col justify-center items-center py-2 gap-4">
            <h2 className="font-thin italic text-xl flex justify-start">
              Your Company
            </h2>
            <div>Employees</div>
            <div>Payroll</div>
            <div className="">Application Tracking</div>
            <div className="">Clients</div>
            <div className="">Invoice</div>
            <div className="">Events</div>
            <div className="">Settings</div>
          </div>
          <div className="flex flex-col justify-center items-center py-2 gap-4">
            <h2 className="font-thin italic text-xl flex justify-start">
              Support
            </h2>
            <div>Knowledge Base</div>
          </div>
        </div>
      </div>
      <div className="shadow-2xl my-4 w-full  flex  flex-col justify-center items-center col-span-0 clg:col-span-4 lg:w-[856px] py-4 shaow-2xl lg:my-0">
        <div className="container  flex gap-2 justify-start mx-2 p-6 lg:p-6 ">
          <a className="text-[var(--base-color)] bg-[var(--accent-color)] rounded  p-2  text-center">
            Home
          </a>
          <a
            href="#"
            className="text-[var(--base-color)] bg-[var(--accent-color)] rounded p-2 text-center"
          >
            Employees
          </a>
        </div>

        <div className="container rounded m-6 h-26 lg:grid lg:grid-cols-2">
          <div className="flex justify-center">
            <h3 className="text-2xl mb-5 lex justify-center items-center">
              Mr.Oadn Employees
            </h3>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <input type="text" placeholder="Search Employee" className="" />
              <select
                id="filter"
                name="filter"
                className=" p-2 mx-2 h-10 rounded-md"
              >
                <option>Active</option>
                <option>On Leave</option>
                <option>Offline</option>
                <option>On Break</option>
              </select>
            </div>

            <div className="my-1 py-4 flex justify-center ">
              <button className="btn">Add Employees</button>
              <button className="btn">Import Employees</button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-screen lg:w-full">
            <div className="grid grid-cols-5 gap-6  bg-[var(--base-color)]  p-1 text-[var(--background-color)] rounded">
              <div className="flex justify-start">ID</div>
              <div className="flex justify-center">Name</div>
              <div className="flex justify-end">Dept.</div>
              <div className="flex justify-center">Status</div>
              <div className="flex justify-center">Actions</div>
            </div>
            <div className="py-5">
              {emps.map((emp, index) => (
                <div
                  id={"emp-" + index}
                  className="flex  items-center justify-center rounded-md h-24 py-3 m-2 text-sm gap-12 border-2 border-black  text-[var(--accent-color)] bg-[var(--base-color)] border-dotted
            transform transition ease-in-out duration-1000 hover:scale-110"
                >
                  <div className=" flex justify-center  pl-2 basis-1/8">
                    {index + 1}
                  </div>

                  <div className="flex justify-start basis-3/8">
                    <img
                      src="https://picsum.photos/200"
                      className="w-10 h-10 rounded-xl mr-1 basis-1/2"
                    />

                    <div className="basis-1/2">{emp.name}</div>
                  </div>
                  <div className="flex justify-end basis-2/8">{emp.dept}</div>
                  <div className="flex justify-center basis-1/8">
                    <div className="h-2 w-2 bg-[green] rounded px-2"></div>
                  </div>
                  <div className="flex justify-end px-2 basis-1/8">
                    <RxDotsVertical />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emp;
