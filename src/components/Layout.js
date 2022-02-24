import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Brightness6Rounded } from "@material-ui/icons";

const Layout = ({ children, title = "Covid-19-Thailand" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="p-6 h-full grid grid-rows-[auto_1fr_auto] max-w-screen-lg my-0 mx-auto font-Nunito font-semibold">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-center items-center mb-8">
        <Image src="/covid-19.svg" alt="Covid-19-Thailand" height="25" width="25" />
        <div className="flex justify-center items-center mx-2 text-xl">
          <p className="text-primary-color">Covid-19 </p>
          <div className="flex ml-2 ">Thailand</div>
        </div>
        <button
          className="border-none bg-transparent p-0 text-secondary flex justify-center items-center"
          onClick={switchTheme}
        >
          <Brightness6Rounded />
        </button>
      </header>

      <main className="">{children}</main>

      {/* <footer className="mt-8 text-secondary text-center bg-slate-800">
        Covid-19-Thailand-App Made by Rockerkoonju
      </footer> */}
    </div>
  );
};

export default Layout;
