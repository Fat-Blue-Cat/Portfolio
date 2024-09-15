// import React from "react";
// import SideBar from "./SideBar";
// import ScrollCircle from './ScrollCircle';

// const Layout = (props) => {
//   return (
//     <div  className="grid grid-cols-1 md:grid-cols-4 ">
//       {/* Sidebar */}
//       <div className="col-span-1">
//         <SideBar />
//       </div>

//       {/* Main Content */}
//       <div className="col-span-1 md:col-span-3 h-[100vh] overflow-y-scroll scroll-hidden">
//         <div className="bg-white">{props.children}</div>
//       </div>
//       <ScrollCircle></ScrollCircle>
//     </div>
//   );
// };

// export default Layout;

import React, { useRef } from "react";
import SideBar from "./SideBar";
// import ScrollCircle from "./ScrollCircle";
import { motion } from "framer-motion";

const Layout = (props) => {
  // Create a reference for the scrollable div
  const scrollRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-white scroll-hidden">
      {/* Sidebar */}
      <div className="col-span-1">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <SideBar />
        </motion.div>
      </div>

      {/* Main Content */}
      <div
        ref={scrollRef}
        className="col-span-1 md:col-span-3 h-[100vh] overflow-y-scroll scroll-hidden "
      >
        <div className="bg-white">{props.children}</div>
      </div>
      {/* Pass scrollRef to ScrollCircle */}
      {/* <ScrollCircle scrollContainerRef={scrollRef} /> */}
    </div>
  );
};

export default Layout;
