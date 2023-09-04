import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import Main from "../layouts/Main";

const theme = createTheme({
  palette: {
    primary: {
      main: "#167742",
    },
    secondary: {
      main: "#FEDB04",
    },
    background: {
      paper: "#EDECEC",
    },
  },
});

const API_URL = process.env.REACT_APP_API_URL;
const urlData = window.location.search;

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={API_URL + "api/v1/draw-sched/" + urlData}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <div className="page-container">
        <ThemeProvider theme={theme}>
          <div className="content-wrap">
            <Main />
          </div>
          <Footer className="" />
        </ThemeProvider>
      </div>
    </>
  );
}
