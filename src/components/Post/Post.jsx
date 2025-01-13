import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    const postStyle = {
        border: '2px solid tomato',
        padding: '5px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    return (
        <div style={postStyle}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
        </div>
    );
};

export default Post;