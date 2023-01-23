import React from "react";
import { Layout } from "./partials/layout";
import Footer from "./partials/footer";
import ContactForm from "./partials/contact-form";
import ProjectGallery from "./partials/project-gallery";
import "./index.css";
import About from "./partials/about";
import LogoAnimation from "./components/logo-animation";
import Navbar from "./partials/navbar";
import CompanyList from "./partials/company-list";

import useWindowDimensions from "./hooks/use-window-dimensions";

function App() {
  const { width, hieght } = useWindowDimensions()
  return (
    <>
      {width > 768 ? (
        <>
          <LogoAnimation />
          <Layout>
            <About />
            <CompanyList />
            <ProjectGallery />
            <ContactForm />
          </Layout>
          <Footer />
        </>
      ) : (
        <>
          <Layout>
            <About />
            <CompanyList />
            <ProjectGallery />
            <ContactForm />
          </Layout>
          <Footer />
        </>
      )
      }
    </>
  );
}

export default App;
