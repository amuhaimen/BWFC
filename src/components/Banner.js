import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
  let [bannerData, setBannerData] = useState({});

  useEffect(() => {
    async function banner() {
      let ban = await axios.get("https://bwfc-api.vercel.app/banner");
      setBannerData(ban.data);
      console.log(ban.data.bannerButton.text);
    }
    banner();
  }, []);
  return (
    <>
      <div className="mt-3 absolute w-[100%]">
        <img className=" w-[100%]" src={bannerData.bannerbgshape} />
      </div>
    </>
  );
};

export default Banner;
