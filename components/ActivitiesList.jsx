import React from "react";
import Activity from "../components/Activity";
import { BsFillTreeFill, BsFlower1 } from "react-icons/bs";
import { SiGitea } from "react-icons/si";
import {
  GiArcheryTarget,
  GiBowlOfRice,
  GiEgyptianBird,
  GiPlantRoots,
  GiPlantsAndAnimals,
  GiStickFrame,
} from "react-icons/gi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import {
  MdCoffee,
  MdOutlineSportsCricket,
  MdSportsBasketball,
} from "react-icons/md";
import { FaTableTennis, FaTractor, FaTrain } from "react-icons/fa";
import { TbCone2 } from "react-icons/tb";

const ActivitiesList = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-10">
        <Activity
          component={<BsFlower1 size={35} />}
          heading={""}
          subheading={"Traditional welcome with peanut and jiggery"}
        />
        <Activity
          component={<SiGitea size={35} />}
          heading={"Hi Tea + Snacks"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Unlimited dinner (veg/ non veg)"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Camp fire at night"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Imported Tents"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Boating Ride"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Tea and Breakfast"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Indoor games"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Limited BBQ"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"big parking area"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={" Safe camping with compounds"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"No Mosquito"}
          subheading={""}
        />
        <Activity
          component={<GiBowlOfRice size={35} />}
          heading={"Separate & Clean washroom."}
          subheading={""}
        />
      </div>
    </>
  );
};

export default ActivitiesList;
