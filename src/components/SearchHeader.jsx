import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white p-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex justify-between items-center mb-3 sm:mb-0 ">
          <Link href="/">
            <h3 className="text-lg sm:text-xl font-bold font-nunito lg:pl-20 xl:pl-28 text-primary">
              NEXSEARCH
            </h3>
          </Link>
        </div>
        <div className="flex flex-1 items-center sm:space-x-5  ">
          <SearchBox className="flex-1" />
          <div className="hidden sm:flex items-center space-x-4">
            <RiSettings3Line className="sm:text-2xl sm:cursor-pointer" />
            <TbGridDots className="sm:text-2xl cursor-pointer" />
          </div>
          <button className="bg-primary  text-white px-2 py-1 rounded-md hover:brightness-105 transition duration-200 mr-1 ">
          sign<span className="ml-1">in</span>
          </button>
        </div>
      </div>
      <br/>
      <SearchHeaderOptions />
    </header>
  );
}
