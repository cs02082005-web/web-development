const posts = require("../data/posts");

// Create Blog
const createPost = (req, res) => {
    const { title, content, author, category } = req.body;

    if (!title || !content || !author || !category) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author,
        category,
        createdDate: new Date()
    };

    posts.push(newPost);

    res.status(201).json({
        message: "Blog created successfully",
        post: newPost
    });
};

// Get All Blogs
const getAllPosts = (req, res) => {
    res.status(200).json(posts);
};

// Get Blog By ID
const getPostById = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find((item) => item.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    res.status(200).json(post);
};

// Update Blog
const updatePost = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find((item) => item.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    const { title, content, author, category } = req.body;

    if (title) post.title = title;
    if (content) post.content = content;
    if (author) post.author = author;
    if (category) post.category = category;

    res.status(200).json({
        message: "Blog updated successfully",
        post
    });
};

// Delete Blog
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);

    const index = posts.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    posts.splice(index, 1);

    res.status(200).json({
        message: "Blog deleted successfully"
    });
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
};