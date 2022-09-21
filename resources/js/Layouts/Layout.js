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

    const [loading, setLoading] = useState(pathname == route("client.home.index") ? true : false);
    if (pathname == route("client.home.index")) {
        Inertia.on('finish',
            setTimeout(() => {
                setLoading(false);
            }, 500)
        )
    }


    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // }, []);
    // useEffect(() => {
    //     setLoading(true);
    //     fetch("https://api.quotable.io/random")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setLoading(false);
    //         });
    // }, []);

    if (seo) {
        setSeoData(seo);
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // console.log(usePage().props);
    const { currentLocale } = usePage().props;

    /*if (currentLocale == "ge") {
        import("./AppGeo.css");
    } else if (currentLocale == "ru") {
        import("./AppRus.css");
    }*/

    return (
        <>
            {loading ? (
                <div className="preloader">
                    <div className="preloader__ring">
                        <div className="preloader__sector">L</div>
                        <div className="preloader__sector">o</div>
                        <div className="preloader__sector">a</div>
                        <div className="preloader__sector">d</div>
                        <div className="preloader__sector">i</div>
                        <div className="preloader__sector">n</div>
                        <div className="preloader__sector">g</div>
                        <div className="preloader__sector">.</div>
                        <div className="preloader__sector">.</div>
                        <div className="preloader__sector">.</div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                    </div>
                    <div className="preloader__ring">
                        <div className="preloader__sector">L</div>
                        <div className="preloader__sector">o</div>
                        <div className="preloader__sector">a</div>
                        <div className="preloader__sector">d</div>
                        <div className="preloader__sector">i</div>
                        <div className="preloader__sector">n</div>
                        <div className="preloader__sector">g</div>
                        <div className="preloader__sector">.</div>
                        <div className="preloader__sector">.</div>
                        <div className="preloader__sector">.</div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                        <div className="preloader__sector"></div>
                    </div>
                </div>
            ) : (
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
            )}
        </>
    );
}
