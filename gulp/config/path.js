import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = "./docs";
const srcFolder = "./src";

export const path = {
    build: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        files: `${distFolder}/imports/`,
        js: `${distFolder}/js/`,
        libraries: [
            `${distFolder}/libraries/`
        ]
    },
    src: {
        html: `${srcFolder}/*.html`,
        includes: `${srcFolder}/includes/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/imports/**/*.*`,
        libraries: [
            `${srcFolder}/../node_modules/bootstrap/**/*.*`,
            `${srcFolder}/../node_modules/normalize.css/**/*.*`
        ]
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/imports/**/*.*`,
        libraries: `${srcFolder}/libraries/**/*.*`
    },
    clean: distFolder,
    buildFolder: distFolder,
    srcFolder: srcFolder,
    watchFolder: rootFolder,
    ftp: ``
};

