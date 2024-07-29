import prisma from "../lib/prisma.js";


export const getPosts=async (req,res)=>{
    try {
        const posts= await prisma.post.findMany();

        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Failed to get posts"});
    }
}

export const getPost=async (req,res)=>{
    const id=req.params.id;
    try {
        const post=await prisma.post.findUnique({
            where:{id}
        });
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Failed to get post"});
    }
}

export const addPost=async (req,res)=>{
    try {
        
        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Failed to create post"});
    }
}

export const updatePost=async (req,res)=>{
    try {
        
        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Failed to update post"});
    }
}

export const deletePost=async (req,res)=>{
    try {
        
        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Failed to delete post"});
    }
}