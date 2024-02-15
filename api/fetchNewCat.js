import {addCatData} from './addCatData';

export const fetchNewCat = async () => {
	try {
		const response = await fetch('https://api.thecatapi.com/v1/images/search');

		if (!response.ok) {
			throw new Error('No cat! Where is the cat??');
		}

		const data = await response.json();

		addCatData(data[0]);
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error);
	}
};
