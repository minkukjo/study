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
        title: 'Kakao i 계정 개발',
        Svg: require('../../static/img/iam_logo.svg')["default"],
        description: (react_1["default"].createElement(react_1["default"].Fragment, null,
            "B2B, B2C\uB97C \uC544\uC6B0\uB974\uB294 \uD1B5\uD569\uD615 \uACC4\uC815 \uC11C\uBE44\uC2A4",
            react_1["default"].createElement("br", null),
            " Kakao i \uACC4\uC815 \uAC1C\uBC1C"))
    },
    {
        title: '도전하는 개발자',
        Svg: require('../../static/img/developer_logo.svg')["default"],
        description: react_1["default"].createElement(react_1["default"].Fragment, null, "\uB9E4\uC77C \uB9E4\uC77C \uC0C8\uB85C\uC6B4 \uAC83\uB4E4\uC5D0 \uB3C4\uC804\uD558\uACE0 \uB178\uB825\uD558\uB294 \uAC1C\uBC1C\uC790")
    },
    {
        title: 'CKA',
        Svg: require('../../static/img/cka_logo_fixed.svg')["default"],
        description: (react_1["default"].createElement(react_1["default"].Fragment, null,
            "\uACF5\uC778 \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC790\uACA9\uC99D",
            react_1["default"].createElement("br", null),
            "CKA \uC790\uACA9\uC99D \uCDE8\uB4DD"))
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
