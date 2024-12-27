
import React from 'react'; // Importing React
import { BiFilterAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";

export default function Filter () {
  return (
    <div className='bg-[#FAF4F4] flex justify-center items-center w-full'>
        <div className=' md:h-[90px] h-[50px] gap-24 flex max-w-7xl justify-between items-center md:px-20 px-8 mt-6 md:mt-10'>
      {/* Container div for the filter section with background color, padding, and margin adjustments */}
      
      <div className='flex justify-center items-center gap-2 md:gap-4 text-[16px]'>
      
       <BiFilterAlt/>
        <p className='text-[10px] md:text-[16px]'>Filter</p>
        <BsGridFill/>
        
        <BsViewList/>
        
        <p>|</p>
        
        {/* Results count display */}
        <p className='text-[10px] md:text-[16px]'>Showing 1–16 of 32 results</p>
      </div>
      
      <div className=' hidden md:flex justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[16px] font-medium'>
        {/* Container for "Show" and "Sort By" dropdown, only visible on larger screens */}
        
        <p className=''>Show</p>
        {/* "Show" option to select how many items to display */}
        <p className='text-[#9F9F9F] bg-white px-4 py-3'>16</p>
        <p className=''>Short By</p>
        {/* Sorting option with a default selection */}
        <p className='text-[#9F9F9F] bg-white px-10 py-2 text-left w-max'>
          <span className='text-left'>Default</span>
        </p>
      </div>
    </div>
    </div>
  );
}