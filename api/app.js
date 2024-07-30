import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app=express();

app.use(cors({origin:"http://localhost:5173" ,credentials:true}));
app.use(express.json());
app.use(cookieParser());

// app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);
app.use("/api/user",userRoute);
app.use("/api/post",postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
// app.use("/test-api/test",testRoute);

app.listen(8800,()=>{
    console.log("Server is running at port 8800");
})