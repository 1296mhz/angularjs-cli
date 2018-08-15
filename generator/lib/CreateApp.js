const fs = require("fs");
const path = require("path");
let ejs = require("ejs");

const struct = require("./struct");
const staticFiles = require("./static");
const templateFiles = require("./template");
const imagesFiles = require("./images");

class CreateApp {
  constructor(appName, flg) {
    this.appName = appName;
    this.flags = flg;
    this.skeletonPath = this.getSkeletonPath();
  }

  createSkeleteonDir() {
    fs.mkdirSync(this.appName);
    fs.mkdirSync(this.appName + "/src");
    fs.mkdirSync(this.appName + "/src/app");
    fs.mkdirSync(this.appName + "/src/app/css");
    fs.mkdirSync(this.appName + "/src/app/css/fonts");
    fs.mkdirSync(this.appName + "/src/app/img");
    fs.mkdirSync(this.appName + "/src/app/img/icons");
    fs.mkdirSync(this.appName + "/src/app/js");

    for (let i = 0; i < struct.length; i++) {
      fs.mkdirSync(this.appName + "/src/app/js/" + struct[i]);
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
    templatesPath.push("static");
    templatesPath.push("skeleton");
    return templatesPath.join("/");
  }

  copyMainFiles() {
    for (let i = 0; i < staticFiles.length; i++) {
      fs.copyFileSync(
        this.skeletonPath + "/" + staticFiles[i],
        this.appName + "/" + staticFiles[i]
      );
    }
  }

  processingImagesFiles(){
    for (let i = 0; i < imagesFiles.length; i++) {
        console.log( this.skeletonPath + "/" + imagesFiles[i], "  ",
        this.appName + "/" + imagesFiles[i]);
      fs.copyFileSync(
        this.skeletonPath + "/" + imagesFiles[i],
        this.appName + "/" + imagesFiles[i]
      );
    }
  }

  processingTemplateFiles() {
    const tplData = {
        appDashName: this.camelToDash(this.appName),
        appCamelCase: this.appName
    }
    for (let i = 0; i < templateFiles.length; i++) {
        let item = fs.readFileSync(this.skeletonPath + "/" + templateFiles[i], "utf8");
        let resultFileData = ejs.render(item, { tpldata: tplData});
        fs.writeFileSync(this.appName + "/" + templateFiles[i], resultFileData);
    }
  }
}

module.exports = CreateApp;
