

const User = ({ user }) => {

    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid tomato',
        padding: '5px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;