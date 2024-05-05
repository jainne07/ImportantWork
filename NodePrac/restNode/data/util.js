const fs = require("node:fs/promises");
function fileCreate(data){
  fs.writeFile("posts.json", `{"posts": [${JSON.stringify(data)}]}`);
}

async function readData() {
  let flag=false
  try{
    flag=true;
    const data = await fs.readFile('posts.json', 'utf8')
    return JSON.parse(data); 
  }catch (err) {
    console.error(err.message);
    flag=false;
  } 
}

async function writeData(data) {
  await fs.writeFile("posts.json", JSON.stringify(data));
}
exports.fileCreate=fileCreate;
exports.readData = readData;
exports.writeData = writeData;
