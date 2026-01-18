import React from "react";
import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-64 rounded-r-[40px] rounded-tl-[40px] border-l-6 border-b-6 border-blue-500  shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-64 rounded-r-[40px] rounded-tl-[40px] border-l-6 border-b-6 border-blue-500  shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#F29018", "#F035A5", "#EB1A32"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Discover opportunities that match your skills and ambitions. Explore
            roles from trusted employers and take the next step in your career
            journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
