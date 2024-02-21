// With async I am saying that this function will be using information that takes time to arrive
export const getCatData = async () => {
	// The function first will try to excecute this code
	try {
		// Just like an if/else
		// This is getting the data from OUR database
		// This process takes time so we say "wait until it is completed"
		const response = await fetch('http://localhost:3000/cats');

		if (!response.ok) {
			throw new Error('No cats! Where are my cats????');
		}
		// Convert the response from a string to json
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Where are my cats?:', error);
	}
};
