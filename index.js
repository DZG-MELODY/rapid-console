"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["SUCCESS"] = "SUCCESS";
    MessageTypes["INFO"] = "INFO";
    MessageTypes["NOTE"] = "NOTE";
    MessageTypes["WARNING"] = "WARNING";
    MessageTypes["ERROR"] = "ERROR";
})(MessageTypes || (MessageTypes = {}));
var COLORS = {
    SUCCESS: "green",
    INFO: "blue",
    NOTE: "white",
    WARNING: "yellow",
    ERROR: "red"
};
var capitalize = function (_a, lowerRest) {
    var first = _a[0], rest = _a.slice(1);
    if (lowerRest === void 0) { lowerRest = false; }
    return first.toUpperCase() +
        (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
};
var bgColor = function (type) { return "bg" + capitalize(COLORS[type]); };
var formatTitle = function (type) {
    return chalk_1["default"][bgColor(type)].black("", "" + MessageTypes[type], "");
};
var formatMessage = function (type, message) {
    return chalk_1["default"][COLORS[type]](message);
};
exports["default"] = {
    success: function (message) {
        console.log(formatTitle(MessageTypes.SUCCESS) + " " + formatMessage(MessageTypes.SUCCESS, message));
    },
    info: function (message) {
        console.log(formatTitle(MessageTypes.INFO) + " " + formatMessage(MessageTypes.INFO, message));
    },
    note: function (message) {
        console.log(formatTitle(MessageTypes.NOTE) + " " + formatMessage(MessageTypes.NOTE, message));
    },
    warning: function (message) {
        console.log(formatTitle(MessageTypes.WARNING) + " " + formatMessage(MessageTypes.WARNING, message));
    },
    error: function (message) {
        console.log(formatTitle(MessageTypes.ERROR) + " " + formatMessage(MessageTypes.ERROR, message));
    },
    plain: function (message, colorNames) {
        if (colorNames === void 0) { colorNames = ["white", "black"]; }
        var _a = colorNames[0], foreColor = _a === void 0 ? "white" : _a, _b = colorNames[1], backgroundColor = _b === void 0 ? "black" : _b;
        console.log(chalk_1["default"]["bg" + capitalize(backgroundColor)][foreColor](message));
    },
    split: function (n, placeHolder) {
        if (n === void 0) { n = 20; }
        if (placeHolder === void 0) { placeHolder = "="; }
        return this.plain(new Array(n).fill(placeHolder).join(""));
    },
    line: function (n) {
        if (n === void 0) { n = 1; }
        while (n <= 0) {
            console.log("");
            n -= 1;
        }
    }
};
