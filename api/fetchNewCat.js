import {addCatData} from './addCatData';

export const fetchNewCat = async () => {
	try {
		// Give me a new cat
		const response = await fetch('https://api.thecatapi.com/v1/images/search');

		// If the request is not correct
		if (!response.ok) {
			throw new Error('No cat! Where is the cat??');
		}

		const data = await response.json();

		addCatData(data[0]);
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error);
	}
};
