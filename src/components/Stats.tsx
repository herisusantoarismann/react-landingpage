import React from "react";
import styles from "../style";
import { stats, IStat } from "../constants";
import Counter from "./common/Counter";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mt-20 mt-6`}
    >
      {stats.map((stat: IStat) => (
        <div
          key={stat.id}
          className={`flex-1 flex flex-row justify-center sm:justify-start items-center `}
        >
          <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
            <Counter
              from={0}
              to={stat.value}
              textBefore={stat.textBefore ? stat.textBefore : ""}
              textAfter={stat.text}
            />
          </h4>
          <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
