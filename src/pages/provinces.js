import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import ProvincesTable from "../components/ProvincesTable";
import UpdateDate from "../components/UpdateDate";
import Footer from "../components/Footer";
export default function Home({ provinces }) {
  const [keyword, setKeyword] = useState("");

  const filteredProvinces = provinces.filter((province) =>
    province.province.toLowerCase().includes(keyword)
  );

  // const updateDate = filteredProvinces[0].update_date

  const onInputChange = (e) => {
    e.preventDefault();

    // console.log(e.target.value)

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      <Layout>
        <div className="mb-5 md:flex md:justify-between">
          <div className="flex py-auto my-3 ml-0 mr-8 text-primary items-center text-base">
            Found {provinces.length} Provinces
          </div>

          <div className=" font-Mitr md:flex-[2]">
            <SearchInput
              placeholder="Filter by Province"
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="flex justify-end my-2">
          <UpdateDate data={filteredProvinces} />
        </div>
        <ProvincesTable provinces={filteredProvinces} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"
  );
  const provinces = await res.json();

  // console.log(provinces);

  //   const allres = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all');
  //   const country = await allres.json();

  //   const provincesData = provinces.reduce((acc,current) => {
  //     const x = acc.find(item => item.province === current.province);
  //     if (!x) {
  //       return acc.concat([current]);
  //     } else {
  //       return acc;
  //     }
  //   }, [])

  //   const countryData = country.reduce((acc,current) => {
  //     const x = acc.find(item => item.txn_date === current.txn_date);
  //     if (!x) {
  //       return acc.concat([current]);
  //     } else {
  //       return acc;
  //     }
  //   }, [])

  return {
    props: {
      provinces: provinces,
    },
  };
};
