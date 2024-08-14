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
		const response = await fetch("/periodic-table.json");
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

// Function to check if a word can be spelled with periodic table symbols
function check(inputWord) {
	const result = [];
	let i = 0;

	while (i < inputWord.length) {
		let matchFound = false;
		// Try to match the longest possible element symbol first
		for (let j = 3; j > 0; j--) {
			const symbol = inputWord.substring(i, i + j).toUpperCase();
			const element = lookup(symbol);

			if (Object.keys(element).length > 0) {
				result.push(element);
				i += j;
				matchFound = true;
				break;
			}
		}
		if (!matchFound) {
			// If no match is found, return an empty array
			return [];
		}
	}
	// Return the array of element objects if the word can be fully spelled
	return result;
}

// Function to look up an element by its symbol
function lookup(elementSymbol) {
	return elements.find(el => el.symbol.toUpperCase() === elementSymbol.toUpperCase()) || {};
}