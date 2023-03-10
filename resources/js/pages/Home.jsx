import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
// import HeroBg from "../assets/images/bg/1.png";
import { FiArrowRight } from "react-icons/fi";
import { useRef, useState } from "react";
// import Layout from "../../Layouts/Layout";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";

// import img1 from "../assets/images/projects/1.png";
// import img2 from "../assets/images/projects/2.png";
// import img3 from "../assets/images/projects/3.png";
// import img4 from "../assets/images/projects/4.png";
// import img5 from "../assets/images/projects/5.png";
// import img6 from "../assets/images/projects/6.png";
// import img7 from "../assets/images/projects/7.png";
// import img8 from "../assets/images/projects/8.png";
// import img9 from "../assets/images/projects/9.png";
import TextSlide from "../components/TextSlide";
import Layout from "../Layouts/Layout";
import { Route } from "react-router-dom";

const Home = ({
    seo,
    category,
    active,
    indexx,
    portfolio,
    searched,
    images,
}) => {
    // console.log(indexx, active, 'esaa');
    // console.log(searched, "esaa");
    // console.log(images);

    const filterProject = () => {
        if (active) {
            return searched.data;
        } else {
            return portfolio.data;
        }
    };

    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    const sharedData = usePage().props.localizations;
    let projectLinks = [
        {
            link: route("client.home.index"),
            name: "All projects",
        },
    ];

    category.map((e) => {
        projectLinks.push({
            link: "",
            name: e.name,
        });
    });

    const [activeLink, setActiveLink] = useState(indexx ? indexx : 0);

    const [transform, setTransform] = useState("translate3d(0, 0, 0)");
    const [transformReverse, setTransformReverse] = useState(
        "translate3d(0, 0, 0)"
    );

    const bgImage = useRef();

    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    // const perspectiveFunction = (e) => {
    //     const mouseX = e.clientX / windowWidth;
    //     const mouseY = e.clientY / windowHeight;

    //     setTransform(`translate3d(-${mouseX}%, -${mouseY}%, 0)`);
    //     setTransformReverse(`translate3d(${mouseX}%, ${mouseY}%, 0)`);
    // };


    let links = function (links) {
        let rows = [];
        //links.shift();
        //links.splice(-1);
        {
            links.map(function (item, index) {
                if (index > 0 && index < links.length - 1) {
                    rows.push(
                        <Link
                            href={item.url}
                            className={
                                item.active
                                    ? "text-custom-pink-500 mx-3 p-2 text-3xl"
                                    : " mx-5 text-3xl"
                            }
                        >
                            {item.label}
                        </Link>
                    );
                }
            });
        }
        return <div className="nums"> {rows.length > 1 ? rows : null} </div>;
    };

    let linksPrev = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[0].url}>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}
                <button
                    className="arrow"
                    style={{ transform: "rotate(-90deg)" }}
                ></button>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}
            </Link>
        ) : null;
    };
    let linksNext = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[links.length - 1].url}>
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                <button
                    className="arrow"
                    style={{ transform: "rotate(90deg)" }}
                ></button>
            </Link>
        ) : null;
    };

    return (
        <Layout seo={seo}>
            <>
                <section
                    className="h-screen bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${images[0]})` }}
                >
                    {" "}
                    <img
                        src={images[0]}
                        className=" img absolute w-full h-full left-0 top-0 -z-10 object-cover"
                        alt="err"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="wrapper h-full flex flex-col justify-end items-start z-20 relative pb-20">
                        <div className="opacity-50 text-3xl h-fit">
                            {" "}
                            {__("client.home_main_title", sharedData)}
                        </div>
                        <h1 className="lg:text-6xl lg:leading-tight text-4xl mt-4 mb-8  h-fit">
                            {renderHTML(
                                __("client.home_main_text", sharedData).replace(
                                    /(?:\r\n|\r|\n)/g,
                                    "<br>"
                                )
                            )}
                        </h1>
                        <Link href={route("client.aboutus")} className="regular">
                            Learn more{" "}
                            <FiArrowRight className="inline-block h-5 w-5" />
                        </Link>
                    </div>
                </section>
                <section className="wrapper py-24 text-center">
                    {projectLinks.map((item, i) => {
                        // console.log(item);
                        return (
                            <Link
                                data-aos="fade-up"
                                key={i}
                                href={
                                    i != 0
                                        ? route("client.project.show", [
                                            item.name,
                                            i,
                                        ])
                                        : route("client.home.index")
                                }
                                // href='/'
                                className="fillup mb-2  text-zinc-500 xl:text-6xl lg:text-5xl md:text-4xl text-2xl block w-fit mx-auto uppercase transition "
                                style={{
                                    color: activeLink == i ? "#E9776D" : "",
                                }}
                                onClick={() => setActiveLink(i)}
                            >
                                <span
                                    aria-hidden="true"
                                    className={activeLink === i && "hidden"}
                                >
                                    {item.name}
                                </span>
                                {item.name}
                            </Link>
                        );
                    })}
                </section>

                <div className="parallax py-20  relative text-center">
                    <div
                        className="absolute left-0  w-full -z-10"
                        style={{ top: "20%" }}
                    >
                        <TextSlide />
                    </div>

                    <MouseParallaxContainer
                        enableCSSTransition
                        useWindowMouseEvents
                        className="parallax py-20  relative"
                    >

                        {filterProject().map((e, i) => {
                            let bigimg = [0, 3, 6];
                            if (bigimg.some((e) => e == i)) {
                                // console.log(e.files[0], 'esaa');
                                const img =
                                    e.files[0] != null
                                        ? "/" +
                                        e.files[0].path +
                                        "/" +
                                        e.files[0].title
                                        : null;

                                return (
                                    // <div className="projectWrapper" key={i}>
                                    <MouseParallaxChild
                                        className="projectWrapper"
                                        factorX={Math.random() * (0.1 - 0.01) + 0.01}
                                        factorY={Math.random() * (0.1 - 0.01) + 0.01}
                                        key={i}
                                    >
                                        <Link
                                            href={route(
                                                "client.showsingleproject.show",
                                                e.id
                                            )}
                                        >
                                            <div className="opacity-50 text-lg mb-2 text-left">
                                                {e.name}
                                            </div>
                                            <div
                                                data-aos="zoom-in-up"
                                                className="w-full overflow-hidden relative perspectiveImageContainer"
                                                style={{ height: "728px" }}
                                            >
                                                <div
                                                    className=" perspectiveImage bg-no-repeat bg-cover bg-right "
                                                    ref={bgImage}
                                                    // onMouseMove={
                                                    //     perspectiveFunction
                                                    // }
                                                    style={{
                                                        transform: transform,
                                                        backgroundImage: `url(${img})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </Link>
                                        {/* </div> */}
                                    </MouseParallaxChild>
                                );
                            } else {
                                const img =
                                    e.files[0] != null
                                        ? "/" +
                                        e.files[0].path +
                                        "/" +
                                        e.files[0].title
                                        : null;

                                // console.log(img, "esaa");
                                return (
                                    // <div
                                    //     key={i}
                                    //     className="lg:w-1/2 projectWrapper w-full inline-block max-w-xl lg:mx-5 lg:my-10"
                                    // >
                                    <MouseParallaxChild
                                        className="lg:w-1/2 projectWrapper w-full inline-block max-w-xl lg:mx-5 lg:my-10"
                                        factorX={Math.random() * (0.1 - 0.01) + 0.01}
                                        factorY={Math.random() * (0.1 - 0.01) + 0.01}
                                        key={i}
                                    >
                                        <Link
                                            className="w-full"
                                            href={route(
                                                "client.showsingleproject.show",
                                                e.id
                                            )}
                                        >
                                            <div className="opacity-50 text-lg mb-2 text-left">
                                                {e.name}
                                            </div>
                                            <div
                                                data-aos="zoom-in"
                                                className="w-full overflow-hidden relative perspectiveImageContainer"
                                                style={{ height: "411px" }}
                                            >
                                                <div
                                                    className=" perspectiveImage reverse bg-no-repeat bg-cover bg-right "
                                                    ref={bgImage}
                                                    // onMouseMove={
                                                    //     perspectiveFunction
                                                    // }
                                                    style={{
                                                        transform: transformReverse,
                                                        backgroundImage: `url(${img})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </Link>
                                        {/* </div> */}
                                    </MouseParallaxChild>
                                );
                            }
                        })}

                    </MouseParallaxContainer>
                </div>

                {/* <div className="wrapper flex items-center justify-center pb-20">
                    <button className="text-custom-pink-500 mx-3 p-2 text-3xl">
                        1
                    </button>
                    <button className=" mx-5 text-3xl">2</button>
                    <button className=" mx-5 text-3xl">3</button>
                </div> */}


                {
                    searched ?
                        <div className="wrapper flex items-center justify-center pt-20">
                            {linksPrev(searched.links)}
                            <button className="">{links(searched.links)}</button>
                            {linksNext(searched.links)}
                        </div>
                        : <div className="wrapper flex items-center justify-center pt-20">
                            {linksPrev(portfolio.links)}
                            <button className="">{links(portfolio.links)}</button>
                            {linksNext(portfolio.links)}
                        </div>
                }


            </>
        </Layout >
    );
};

export default Home;
