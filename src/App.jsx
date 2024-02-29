import { ResourceLoader } from "./components/Container/ResourceLoader.jsx";
import PostInfo from "./components/PostInfo.jsx";
import UserInfo from "./components/UserInfo.jsx";

function App() {
	return (
		<>
			<ResourceLoader resourceUrl="https://jsonplaceholder.typicode.com/users/1" resourceName="user">
				<UserInfo />
			</ResourceLoader>
			<ResourceLoader resourceUrl="https://jsonplaceholder.typicode.com/posts/1" resourceName="post">
				<PostInfo />
			</ResourceLoader>
			
		</>
	);
}

export default App;
