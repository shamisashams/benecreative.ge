import React, { useState, useEffect } from "react";
// import "./App.css";
import "./index.css";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import setSeoData from "./SetSeoData";
import CursorFollower from "../components/CursorFollower";
// import {Fragment} from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import { usePage } from "@inertiajs/inertia-react";

export default function Layout({ children, seo = null }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
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

    console.log(usePage().props);
    const { currentLocale } = usePage().props;

    /*if (currentLocale == "ge") {
        import("./AppGeo.css");
    } else if (currentLocale == "ru") {
        import("./AppRus.css");
    }*/

    return (
        <>
            {loading ? (
                <div class="preloader">
                    <div class="preloader__ring">
                        <div class="preloader__sector">L</div>
                        <div class="preloader__sector">o</div>
                        <div class="preloader__sector">a</div>
                        <div class="preloader__sector">d</div>
                        <div class="preloader__sector">i</div>
                        <div class="preloader__sector">n</div>
                        <div class="preloader__sector">g</div>
                        <div class="preloader__sector">.</div>
                        <div class="preloader__sector">.</div>
                        <div class="preloader__sector">.</div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                    </div>
                    <div class="preloader__ring">
                        <div class="preloader__sector">L</div>
                        <div class="preloader__sector">o</div>
                        <div class="preloader__sector">a</div>
                        <div class="preloader__sector">d</div>
                        <div class="preloader__sector">i</div>
                        <div class="preloader__sector">n</div>
                        <div class="preloader__sector">g</div>
                        <div class="preloader__sector">.</div>
                        <div class="preloader__sector">.</div>
                        <div class="preloader__sector">.</div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
                        <div class="preloader__sector"></div>
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
