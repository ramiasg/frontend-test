import React from "react";
import Course from "../components/Course";
import Video from "../components/Video";
import data from "../data/store";

const Store = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-start">
      <div className="md:w-7/12 w-full about-video relative">
        <Video />
      </div>
      <div className="md:w-5/12 w-full">
        <div className="flex justify-start items-start flex-wrap flex-row-reverse store">
          {data.map((course) => {
            return <Course key={course.id} data={course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
