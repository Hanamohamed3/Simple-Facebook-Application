import express from 'express'
import db_connection from './db/connection.js'
import userRouter from './modules/users/user.routes.js'
import postRouter from './modules/posts/posts.routes.js'
import commentRouter from './modules/comments/comments.routes.js'



// import Comment from './db/models/comment.model.js';
// import Post from './db/models/post.model.js';
// import User from './db/models/user.model.js';
const app = express()
const port = 3000
app.use(express.json());

app.use("/user",userRouter)
app.use("/post",postRouter)
app.use("/comment",commentRouter)



db_connection();


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))