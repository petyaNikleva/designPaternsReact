const UserInfo = ({ user }) => {
	const { name, email, phone } = user || {};

	return user ? (
		<>
		<h3>{name}</h3>
		<p>Email: {email}</p>
		<h3>Phone: {phone} </h3>
		</>
	) : <p>Loading...</p>;
}

export default UserInfo;