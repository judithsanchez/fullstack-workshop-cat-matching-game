export const getCatData = async () => {
	try {
		const response = await fetch('http://localhost:3000/cats');

		if (!response.ok) {
			throw new Error('No cats! Where are my cats????');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Where are my cats?:', error);
	}
};
