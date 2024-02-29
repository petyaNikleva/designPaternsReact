import { useResource } from "../../hooks/useResource.js";

export const UserInfo = ({ userId }) => {
    const user = useResource(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const { name, email, phone } = user || {};

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </>
    ) : <p>No user found.</p>;
}

export default UserInfo;