import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import ProvincesTable from "../components/ProvincesTable";

export default function Home({ country }) {
  const [keyword, setKeyword] = useState("");

  const [name, setName] = useState("")

  const dataLength = country.length - 1;
  const lastDate = country[dataLength].txn_date;
  // const today_case = country.find(data => data === today)

  // const filteredDate = setKeyword.filter(
  //   (setKeyword) =>
  //   setKeyword.protxn_datevince.toLowerCase().includes(keyword)
  // );

  const filteredDate = country.find(
    (data) => data.txn_date === keyword || data.txn_date === lastDate
  );
  // console.log(filteredDate);

  const onInputChange = (e) => {
    e.preventDefault();
    const input = e.target.value;

    if (input > lastDate) {
      setKeyword(lastDate);
    } else {
      setKeyword(input);
    }
  };

  useEffect(() => {
    setKeyword(lastDate);
  }, []);

  return (
    <Layout>
      <div className=" w-[650px] m-[0_auto] p-10 bg-slate-300 rounded-xl shadow-md">
        <div className="flex md:justify-end justify-center">
        
        <input
        className=" text-neutral-900 border-4 rounded-lg border-sky-300  flex "
        type="date"
        name="date"
        value={keyword}
        onChange={onInputChange}
      />
      </div>
      
    <div className="flex justify-center">
      <div className="grid grid-rows-4 gap-2 grid-flow-col my-5">
        {/* new cases */}
        <div className="flex row-span-3 border-2 border-red-500 w-60 h-60">
          <span>New Cases {filteredDate.new_case}</span>
          <span>Total {filteredDate.total_case}</span>
        </div>
        <div className="flex border-2 border-red-500">
          <span>
            Foreigner{" "}
            {filteredDate.new_case - filteredDate.new_case_excludeabroad}
          </span>
          <span>
            Total{" "}
            {filteredDate.total_case - filteredDate.total_case_excludeabroad}
          </span>
        </div>
        <div className="flex row-span-2 border-2 border-red-500">
          <span>Thai {filteredDate.new_case_excludeabroad}</span>
          <span>Total {filteredDate.total_case_excludeabroad}</span>
        </div>
        <div className="flex border-2 border-red-500">
          <span>New Death {filteredDate.new_death}</span>
          <span>Total Death {filteredDate.total_death} </span>
        </div>
        <div className="flex border-2 border-red-500">
          <span>New Recovered {filteredDate.new_recovered}</span>
          <span>Total Recovered {filteredDate.total_recovered} </span>
        </div>
      </div>
    </div>
      </div>
      
      
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
  // const provinces = await res.json();

  const allres = await fetch(
    "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all"
  );
  const country = await allres.json();

  return {
    props: {
      country: country,
    },
  };
};
