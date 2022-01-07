import Link from 'next/link'
import {
  KeyboardArrowUpRounded,
  KeyboardArrowDownRounded,
} from "@material-ui/icons";
import { useState } from "react";

const orderBy = (provinces, value, direction) => {
  if (direction === "asc") {
    return [...provinces].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...provinces].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return provinces;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className="text-primary-color flex justify-center items-center ml-0.5">
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className="text-primary-color flex justify-center items-center ml-0.5">
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const ProvincesTable = ({ provinces }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedProvinces = orderBy(provinces, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("asc");
    } else if (direction === "asc") {
      setDirection("desc");
    } else {
      setDirection("asc");
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  

  return(
    <div>
    <div className= "flex p-5 mb-5 border-2 border-slate-400 shadow-md rounded-xl">
      <button
        className= " flex-[4] text-secondary justify-center font-medium flex items-center md:justify-start"
        onClick={() => setValueAndDirection("province")}
      >
        <div>Province</div>

        {value === "province" && <SortArrow direction={direction} />}
      </button>

      <button
        className= "md:flex-[4] justify-center text-secondary font-medium md:flex items-center hidden"
        onClick={() => setValueAndDirection("new_case")}
      >
        <div>New Case</div>

        {value === "new_case" && <SortArrow direction={direction} />}
      </button>

      <button
        className= "flex-[4] justify-center text-secondary font-medium flex items-center"
        onClick={() => setValueAndDirection("total_case")}
      >
        <div>
          Total Case
        </div>

        {value === "total_case" && <SortArrow direction={direction} />}
      </button>

      <button
        className= "md:flex-[4] justify-center text-secondary font-medium md:flex items-center hidden"
        onClick={() => setValueAndDirection("total_death")}
      >
        <div>Total Death</div>

        {value === "total_death" && <SortArrow direction={direction} />}
      </button>
    </div>

    {orderedProvinces.map((province) => (
      <Link href={`/province/${province.province}`} key={province.province}>
        <div className= "flex p-5 text-center bg-dark-bg rounded-lg mb-4 shadow-md transition hover:-translate-y-2 hover:shadow-lg">
          <div className= " font-Mitr flex-[4] justify-around md:text-left text-primary">{province.province}</div>

          <div className= " font-Mitr md:flex-[4] justify-around md:flex text-primary hidden">{province.new_case}</div>

          <div className= " font-Mitr flex-[4] justify-around text-primary">{province.total_case}</div>

          <div className= " font-Mitr md:flex-[4] justify-around md:flex text-primary hidden">{province.total_death}</div>
        </div>
</Link>
    ))}
  </div>
  )
};

export default ProvincesTable;
