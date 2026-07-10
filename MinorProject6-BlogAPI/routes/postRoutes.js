const express = require("express");
const router = express.Router();

const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} = require("../controllers/postController");

// Create Blog
router.post("/posts", createPost);

// Get All Blogs
router.get("/posts", getAllPosts);

// Get Single Blog by ID
router.get("/posts/:id", getPostById);

// Update Blog
router.put("/posts/:id", updatePost);

// Delete Blog
router.delete("/posts/:id", deletePost);

module.exports = router;