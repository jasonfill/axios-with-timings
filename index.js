const axios = require('axios');
const http = require("http");
const https = require("https");
const shimmer = require("shimmer");
const timer = require("./http-timer");

shimmer.massWrap([http, https], ['request'], function (original) {
return function (...args) {
    const request = original.apply(this, args)
    timer(request)
    return request
}
});

module.exports = axios;