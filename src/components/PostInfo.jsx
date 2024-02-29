 const PostInfo = ({ post }) => {
	const { title, body } = post || {};

	return post ? (
		<>
		<h3>{title}</h3>
		<p>{body}</p>
		</>
	) : <p>Loading...</p>;
}

export default PostInfo;