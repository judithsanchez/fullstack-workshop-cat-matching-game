export const addCatData = async data => {
	try {
		const postData = await fetch('http://localhost:3000/cats', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		console.log('Data added!');
	} catch (error) {
		console.error('Could not add the kitty :( ->', error);
	}
};
