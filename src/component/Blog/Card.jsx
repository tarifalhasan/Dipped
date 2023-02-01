import React from "react";

const card = ({ img, title, subTitle, date, category }) => {
  return (
    <div>
      <img
        className="rounded w-full transform transition duration-500 hover:scale-90"
        src={img}
        alt=""
      />
      <div className="flex gap-y-5 mt-2 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p className="text-base opacity-80">{subTitle}</p>
        {/* <p className="text-base font-normal">{data}</p> */}
        <div className="flex justify-between items-center">
          <p className="text-base">{category}</p>
          <p className="text-base">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
