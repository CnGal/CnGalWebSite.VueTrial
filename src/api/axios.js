import axios from "axios";

export default axios.create(
	Object.assign(
		{},
		{
			baseURL: "https://api.cngal.org"
		},
		localStorage.getItem("authToken")
			? {
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("authToken")
					}
			  }
			: {}
	)
);
