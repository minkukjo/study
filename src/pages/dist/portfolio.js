"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("@theme/Layout");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var handleScrollDown = function () {
    window.scroll({
        top: 1000,
        behavior: 'smooth'
    });
};
var Portfolio = function () {
    react_1.useEffect(function () {
        aos_1["default"].init();
    }, []);
    return (react_1["default"].createElement(Layout_1["default"], { title: "Hello" },
        react_1["default"].createElement("h1", { className: "hero__logo", "data-aos": "zoom-in" }, "Developer"),
        react_1["default"].createElement("h2", { className: "hero__text", "data-aos": "fade-up", "data-aos-easing": "ease", "data-aos-delay": "400" },
            react_1["default"].createElement("span", null, "Minkuk Jo")),
        react_1["default"].createElement("div", { className: "hero__scroll", "data-aos": "fade-up", "data-aos-easing": "ease", "data-aos-delay": "800", onClick: handleScrollDown },
            "Scroll down",
            react_1["default"].createElement("i", { className: "chevron bottom" })),
        react_1["default"].createElement("div", { style: {
                paddingTop: '1000px',
                display: 'block',
                height: '100%',
                fontSize: '20px',
                margin: '50px'
            } },
            react_1["default"].createElement("div", { className: "item item--left", "data-aos": "fade-up" }),
            react_1["default"].createElement("div", { className: "item item--right", "data-aos": "fade-left" }),
            react_1["default"].createElement("div", { className: "item item--left", "data-aos": "fade-right" }),
            react_1["default"].createElement("div", { className: "item item--right", "data-aos": "zoom-in" }),
            react_1["default"].createElement("div", { className: "item item--left", "data-aos": "zoom-in-up" }),
            react_1["default"].createElement("div", { className: "item item--right", "data-aos": "zoom-out" }),
            react_1["default"].createElement("div", { className: "item item--left", "data-aos": "zoom-out-up" }),
            react_1["default"].createElement("div", { className: "item item--right", "data-aos": "flip-left" }),
            react_1["default"].createElement("div", { className: "item item--left", "data-aos": "flip-right" }))));
};
exports["default"] = Portfolio;
