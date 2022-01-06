import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home({provinces, country}) {

  console.log(provinces)
  console.log(country)
  
  return (
    <Head>
      <title>Covid-19 Thailand</title>
    </Head>
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