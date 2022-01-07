import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'
import ProvincesTable from '../components/ProvincesTable'

export default function Home({provinces, country}) {
  const [keyword, setKeyword] = useState("")

  // console.log(country)
  
  const filteredProvinces = provinces.filter(
    (province) =>
      province.province.toLowerCase().includes(keyword)
  );

  // console.log(provinces)

  const onInputChange = (e) => {
    e.preventDefault();

    // console.log(e.target.value)

    setKeyword(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className="mb-5 md:flex md:justify-between">
        <div className="my-3 mx-0 text-primary md:flex-1">Found {provinces.length} Provinces</div>

        <div className="md:flex-[2]">
          <SearchInput
            placeholder="Filter by Province"
            onChange={onInputChange}
          />
        </div>
        
      </div>
        <div className="flex justify-end my-2">Update At {provinces[0].update_date}</div>
      <ProvincesTable provinces={filteredProvinces} />
    </Layout>
  )
  }

export const getStaticProps = async () => {
  const res = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
  const provinces = await res.json();

  const allres = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all');
  const country = await allres.json();

  const provincesData = provinces.reduce((acc,current) => {
    const x = acc.find(item => item.province === current.province);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [])


  const countryData = country.reduce((acc,current) => {
    const x = acc.find(item => item.txn_date === current.txn_date);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [])

  return {
    props: {
      provinces:provincesData,
      country:countryData,
    },
  };
};