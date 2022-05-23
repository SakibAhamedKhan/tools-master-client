import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useToken = () => {
	const [token, setToken] = useState('');
	const [user, loading, error] = useAuthState(auth);


	useEffect(  () => {
		console.log(user);
		const email = user?.email;
		const userDoc = {
			email: user?.email,
		}

		if(user?.email) {
			fetch(`http://localhost:5000/user/${email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(userDoc)
			})
			.then(res => res.json())
			.then(data => {
				localStorage.setItem('access-token', data.token);
				setToken(data.token);
			})
		}
	}, [user]);

	return [token];
}

export default useToken;
