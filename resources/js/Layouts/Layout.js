import React, { useState, useEffect } from "react";
// import "./App.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'
import "./index.css";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import setSeoData from "./SetSeoData";
import CursorFollower from "../components/CursorFollower";
// import {Fragment} from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import { Route } from "react-router-dom";

export default function Layout({ children, seo = null }) {

    const { pathname } = usePage().props;

    if (seo) {
        setSeoData(seo);
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // console.log(usePage().props);
    const { currentLocale } = usePage().props;


    return (
<>
{/*<Router>*/}
{/*<Fragment>*/}
<CursorFollower />
<Navbar />
{children}
<Footer />
{/*</Fragment>*/}
{/*</Router>*/}
</>
    );
}
