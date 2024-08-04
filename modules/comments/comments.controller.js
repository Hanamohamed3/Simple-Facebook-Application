import Post from "../../db/models/post.model.js";
import User from "../../db/models/user.model.js"
import Comment from "../../db/models/comment.model.js";


export const addComment = async (req, res) => {
const { content, UserId, PostId } = req.body;
const user = await User.findOne({ where: { id: UserId, loginStatus: true } });
if (!user) {
return res.json({ message: "User not found or not logged in" });
}
const comment = await Comment.create({ content, UserId, PostId });
res.json({ message: "Comment created successfully", comment});

};

export const getComments = async (req, res) => {
    const comments=await Comment.findAll();
    res.json({message:"Comments fetched successfully",comments})

}



export const userWithPostsAndComments = async (req, res) => {
const users = await User.findAll({
include: {
model: Post,
attributes: ["title"],
include: { model : Comment, attributes : ["content"] },

},
})
res.json({message:"Users fetched successfully",users});
}







export const updateComment=async (req,res)=>{
        const { id } = req.query;
        const {content, UserId } = req.body;
        const comment = await Comment.update({ content}, {where: { id, UserId } });
        return comment > 0
        ? res.json({ message: "comment updated successfully" })
        : res.json( {message: "comment not found or not authorized"} );
    };

    export const deleteComment=async (req,res)=>{
        const { id } = req.query;
        const { UserId } = req.body;
        const comment = await Comment.destroy( {where: { id, UserId } });
        return comment > 0
        ? res.json({ message: "comment deleted successfully" })
        : res.json( {message: "comment not found or not authorized"} );
    };
