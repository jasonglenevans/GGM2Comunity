var fs = require("fs");
var vmDat = fs.readFileSync("./index.js",{encoding:"Base64"});
var rendererDat = fs.readFileSync("./renderer.js",{encoding:"Base64"});
var audioDat = fs.readFileSync("./audio.js",{encoding:"Base64"});

fs.writeFileSync("../compressed.js",`eval(atob("${vmDat}"));eval(atob("${rendererDat}"));eval(atob("${audioDat}"));`)