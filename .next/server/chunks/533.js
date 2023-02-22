"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 533:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Qk": () => (/* binding */ getPostsMetaData),
/* harmony export */   "hC": () => (/* binding */ getAllPostsPath)
/* harmony export */ });
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
// current 'posts' directory
const postsDirectory = path.join(process.cwd(), "posts");
const mdx_file_extension = ".mdx";
function getAllFilesInDirectory() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return path.parse(fileName);
    });
}
function getMdxFiles() {
    const allFiles = getAllFilesInDirectory();
    return allFiles.filter((parsedFile)=>parsedFile.ext == mdx_file_extension);
}
function getAllPostsPath() {
    const allMdxFiles = getMdxFiles();
    return allMdxFiles.map((parsedFile)=>{
        return {
            params: {
                id: parsedFile.name
            }
        };
    });
}
function getPostsMetaData() {
    const allMdxFiles = getMdxFiles();
    const postsMetaData = allMdxFiles.map((parsedFile)=>{
        const fullPath = path.join(postsDirectory, parsedFile.base);
        // get MDX metadata and content
        const fileContents = fs.readFileSync(fullPath, "utf8");
        // get metadata, content
        const { data , content  } = matter(fileContents);
        let metadata = data;
        metadata["id"] = parsedFile.name;
        return metadata;
    });
    return postsMetaData;
}
function getPostData(id) {
    const fullPath = path.join(postsDirectory, id + mdx_file_extension);
    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data , content  } = matter(fileContents);
    let metadata = data;
    metadata["id"] = id;
    return {
        metadata: metadata,
        content: content
    };
}


/***/ })

};
;