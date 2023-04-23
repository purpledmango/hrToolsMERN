import { RxQuestionMarkCircled, RxPinLeft, RxPinRight } from "react-icons/rx";
import { MdSupervisedUserCircle } from "react-icons/md";
import $ from "jquery";
import { useEffect } from "react";
import "../style.css";

const Nav = () => {
  let mobMenuActive = false;
  useEffect(() => {
    mobMenuActive = true;
    $("#mob-menu").hide();
  }, []);
  const toggleMobMenu = () => {
    if (mobMenuActive === true)
      $("#mob-menu").slideDown(200, "swing", () => {
        mobMenuActive = false;
        console.log(mobMenuActive);
      });
    else if (mobMenuActive === false) {
      $("#mob-menu").slideUp(150, "swing", () => {
        mobMenuActive = true;
        console.log(mobMenuActive);
      });
    }
  };
  return (
    <>
      <nav id="side-nav">
        <div className="flex w-screen justify-between items-center">
          <div className="pl-3 flex">
            <h1 className="text-xl">HR Tools</h1>
          </div>
          <div className="text-xl ">
            <div className="flex justify-center items-center">
              <div className="flex">
                <img
                  src="https://placehold.co/400"
                  className="w-8 h-8 rounded"
                  alt="Nitish's Img"
                />
                <RxQuestionMarkCircled className="text-3xl" />
              </div>
              <div className="flex justify-center items-center relative">
                <button
                  id="menu-btn"
                  onClick={toggleMobMenu}
                  className="menu__button"
                >
                  <span className="text-xs inline">5:12:34</span>
                  <RxPinLeft className="inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="mob-menu" className=" w-screen mt-1 md:block lg:invisble">
        <div className="w-full relative flex mx-auto justify-center">
          <div className="absolute w-[95%] bg-[var(--base-color)] flex text-gray-200 rounded">
            <div className="w-full  flex flex-col text-center">
              <div className="p-4 font-xl trasintion-all hover:text-[red]">
                Home
              </div>
              <div className="p-4 font-xl trasintion-all hover:text[red]">
                Employees
              </div>
              <div className="p-4 font-xl trasintion-all hover:text[red]">
                Import
              </div>
              <div className="p-4 font-xl trasintion-all hover:text[red]">
                Finance
              </div>
              <div className="p-4 font-xl trasintion-all hover:text[red]">
                Invoice
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
