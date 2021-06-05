"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var HomepageFeatures_module_css_1 = require("./HomepageFeatures.module.css");
var FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg')["default"],
        description: react_1["default"].createElement(react_1["default"].Fragment, null, "\uD654\uBA74 \uAC1C\uC120\uD574\uB77C~~~")
    },
    {
        title: 'Focus on What Matters',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg')["default"],
        description: react_1["default"].createElement(react_1["default"].Fragment, null, "\uD654\uBA74 \uAC1C\uC120\uD574\uB77C~~~")
    },
    {
        title: 'Powered by React',
        Svg: require('../../static/img/undraw_docusaurus_react.svg')["default"],
        description: react_1["default"].createElement(react_1["default"].Fragment, null, "\uD654\uBA74 \uAC1C\uC120\uD574\uB77C~~~")
    }
];
function Feature(_a) {
    var Svg = _a.Svg, title = _a.title, description = _a.description;
    return (react_1["default"].createElement("div", { className: clsx_1["default"]('col col--4') },
        react_1["default"].createElement("div", { className: "text--center" },
            react_1["default"].createElement(Svg, { className: HomepageFeatures_module_css_1["default"].featureSvg, alt: title })),
        react_1["default"].createElement("div", { className: "text--center padding-horiz--md" },
            react_1["default"].createElement("h3", null, title),
            react_1["default"].createElement("p", null, description))));
}
function HomepageFeatures() {
    return (react_1["default"].createElement("section", { className: HomepageFeatures_module_css_1["default"].features },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row" }, FeatureList.map(function (props, idx) { return (react_1["default"].createElement(Feature, __assign({ key: idx }, props))); })))));
}
exports["default"] = HomepageFeatures;
