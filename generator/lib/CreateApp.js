const fs = require("fs");
const path = require("path");
let ejs = require("ejs");

const structDir = require("./dir");
const staticFiles = require("./static");
const templateFiles = require("./template");
const assetsFiles = require("./assets");

class CreateApp {
  constructor(appName, flg) {
    this.appName = appName;
    this.flags = flg;
    this.skeletonPath = this.getSkeletonPath();
  }

  createSkeleteonDir() {
    console.log("Createing directory...")
    console.log(this.appName)
    fs.mkdirSync(this.appName);
    for (let i = 0; i < structDir.length; i++) {
      console.log("Creating: " + structDir[i]);
      fs.mkdirSync(this.appName + structDir[i]);
    }

    return true;
  }

  camelToDash(str) {
    return str
      .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
      .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
  }

  getSkeletonPath() {
    let templatesPath = __dirname.split(path.sep);
    templatesPath.pop();
    //templatesPath.push("static");
    //templatesPath.push("app");
    return templatesPath.join("/");
  }

  copyMainFiles() {
    console.log("Copying main files...");
    for (let i = 0; i < staticFiles.length; i++) {
      console.log("Copying: ", staticFiles[i]);
      fs.copyFileSync(
        this.skeletonPath + "/" + staticFiles[i],
        this.appName + "/" + staticFiles[i]
      );
    }
  }

  processingAssetsFiles() {
    console.log("Copying assets files...")
    for (let i = 0; i < assetsFiles.length; i++) {

      console.log("Copying: ", this.appName + "/" + assetsFiles[i]);

      fs.copyFileSync(
        this.skeletonPath + "/" + assetsFiles[i],
        this.appName + "/" + assetsFiles[i]
      );
    }
  }

  processingTemplateFiles() {
    console.log("Compiling files...")
    const tplData = {
      appDashName: this.camelToDash(this.appName),
      appCamelCase: this.appName.trim()
    }
    for (let i = 0; i < templateFiles.length; i++) {
      console.log("Compiling: ", templateFiles[i])
      let item = fs.readFileSync(this.skeletonPath + "/" + templateFiles[i], "utf8");
      let resultFileData = ejs.render(item, { tpldata: tplData });
      fs.writeFileSync(this.appName + "/" + templateFiles[i], resultFileData);
    }
  }
}

module.exports = CreateApp;
