import BeerList from "./components/BeerList/BeerList.jsx";
import ToDos from "./components/ToDos/ToDos.jsx";
import UserInfo from "./components/UserInfo/UserInfo.jsx";

function App() {
	return (
		<>
	    	{/* <BeerList /> */}
			{/* <ToDos /> */}
			<UserInfo userId={1} />
		</>
	);
}

export default App;