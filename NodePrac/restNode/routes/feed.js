const express = require("express");
const router = express.Router();
const { v4: generateId } = require("uuid");
const { getAll, remove, create, update, get } = require("../data/feed");
router.get("/get-post", async (req, res, next) => {
  const posts = await getAll();
  if (!posts || posts.posts.length === 0) {
    return res.status(400).json({
      message: "No data found. please add new data",
    });
  }
  return res.status(200).json({
    message: "Get data successfully",
    posts: posts,
  });
});
router.get("/get-post/:id", async (req, res, next) => {
  const params = req.params.id;
  const posts = await get(params);
  if (!posts) {
    return res.status(400).json({
      message: "Could not find for this id",
    });
  }
  return res.status(200).json({
    message: "Get Post particular id successfully",
    posts: posts,
  });
});
router.post("/create-post", async (req, res, next) => {
  const post = {
    id: generateId(),
    title: req.body.title,
    description: req.body.description,
  };
  const posts = await create(post);
  return res.status(201).json({
    message: "Created post sucessfully",
    posts: posts,
  });
});
router.patch("/update-post/:id", async (req, res, next) => {
  const params = req.params.id;
  const post = {
    id: params,
    title: req.body.title,
    description: req.body.description,
  };
  const posts = await update(params, post);
  if(posts){
    return res.status(200).json({
      message: "Updated post sucessfully",
      posts: posts,
    });
  }
  return res.status(404).json({
    message: "Could not find for this id",
  });
});
router.delete("/delete-post/:id", async(req, res, next) => {
const params = req.params.id;
const posts=await remove(params);
if(posts){
  return res.status(200).json({
    message: "delete post sucessfully",
    posts: posts
  });
}
return res.status(404).json({
  message: "Could not find for this id",
});
});

module.exports = router;
