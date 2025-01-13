import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid tomato',
        padding: '5px',
        borderRadius: '20px',
        marginBottom: '10px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;