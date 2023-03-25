import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  let [navbarData, setNavbarData] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function nav() {
      let navbar = await axios.get("https://bwfc-api.vercel.app/navbar");
      setNavbarData(navbar.data);
      setLoading(false);
    }
    nav();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className=" max-w-container  mx-auto ">
      <div className="flex  justify-between items-center mt-7">
        <div className=" w-[10%]">
          <img src={navbarData.logo} />
        </div>
        <div className=" w-[56%]">
          <ul className=" flex justify-center items-center  gap-x-10 font-man font-normal text-sm">
            {navbarData.navItems.map((nitem) => (
              <li className=" hover:text-primary transition ease-in-out delay-150 cursor-pointer">
                {nitem.item}
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-[34%] flex justify-end gap-x-2.5">
          {navbarData.buttonOne.visibility && (
            <a
              href="#"
              className="py-4 px-9 inline-block text-primary font-semibold text-sm   rounded-lg hover:text-white hover:bg-primary hover:border-transparent  transition ease-in-out delay-150"
            >
              {navbarData.buttonOne.text}
            </a>
          )}
          {navbarData.buttonTwo.visibility && (
            <a
              href="#"
              className=" bg-primary py-4 px-9 inline-block text-white font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150"
            >
              {navbarData.buttonTwo.text}
            </a>
          )}
          {navbarData.buttonThree.visibility && (
            <a
              href="#"
              className=" bg-primary py-4 px-9 inline-block text-white font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150"
            >
              {navbarData.buttonThree.text}
            </a>
          )}
        </div>
      </div>
      {/* <img src={navbarData.logo} />

      <ul>
        {navbarData.navItems.map((nitem) => (
          <li>{nitem.item}</li>
        ))}
      </ul>

      {navbarData.buttonOne.visibility && <h1>{navbarData.buttonOne.text}</h1>}
      {navbarData.buttonTwo.visibility && <h1>{navbarData.buttonTwo.text}</h1>}
      {navbarData.buttonThree.visibility && (
        <h1>{navbarData.buttonThree.text}</h1>
      )} */}
    </div>
  );
};

export default Navbar;
