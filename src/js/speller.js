// Exported functions
export default {
	check,
	lookup,
};

// Variable to hold elements
let elements = [];

// Load periodic table data asynchronously
async function loadPeriodicTable() {
	try {
		const response = await fetch(`${process.env.PUBLIC_URL}/periodic-table.json`);
		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}
		elements = await response.json();
		console.log("response = ",elements);
	} catch (error) {
		console.error("Failed to load periodic table data:", error);
	}
}

// Initialize data
loadPeriodicTable();

function check(inputWord) {
	const result = findElements(inputWord.toLowerCase(), 0);
	return result !== null ? result : [];
}

function findElements(inputWord, index) {
	if (index === inputWord.length) {
		return []; // Successfully matched the entire word
	}

	for (let j = 3; j > 0; j--) {
		const symbol = capitalize(inputWord.substring(index, index + j));
		const element = lookup(symbol);

		if (element && Object.keys(element).length > 0) {
			const remainderResult = findElements(inputWord, index + j);
			if (remainderResult !== null) {
				return [element, ...remainderResult];
			}
		}
	}

	return null; // No valid element sequence found
}

function lookup(elementSymbol) {
	return elements.find(el => el.symbol.toUpperCase() === elementSymbol.toUpperCase()) || {};
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}