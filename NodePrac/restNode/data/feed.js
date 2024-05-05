const {writeData, readData, fileCreate} =require('./util')
const { v4: generateId } = require("uuid");
const getAll = async () => {
  const storeData = await readData();
  return storeData;
};
const get = async (id) => {
  const storeData = await readData();
  const post = storeData.posts.find((item) => item.id === id);
    return post;
};
const create = async (data) => {
  const storeData = await readData();
  if(storeData !==undefined){
    storeData.posts.push({ ...data });
    await writeData(storeData);
    return storeData;
  }else{
    await fileCreate(data)
    const newData = await readData();
    return newData;
  }
};
const update = async (id, data) => {
  const storeData = await readData();
  const postId = storeData.posts.findIndex((item) => item.id === id);
  if (postId >= 0) {
    storeData.posts[postId] = data;
    await writeData(storeData);
    return storeData;
  }
};
const remove = async (id) => {
  const storeData = await readData();
  const postId = storeData.posts.findIndex((item) => item.id === id);
  console.log(postId)
  if(postId>=0){
    storeData.posts.splice(postId, 1);
    await writeData(storeData);
    return storeData;
  }
};
exports.getAll=getAll;
exports.get=get;
exports.create=create;
exports.update=update;
exports.remove=remove