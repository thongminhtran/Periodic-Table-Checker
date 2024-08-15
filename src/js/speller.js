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
// TEST WORDS
//
// [
//   "accept","access","accessibilities","accrete","accrual","accuracy","accuse","aces","ache",
//   "acids","acne","acorn","action","agitation","agnostic","ago","alimony","alpacas","america",
//   "american","amish","amputate","amputation","aspirin","attention","auction","autistic","bacon",
//   "ballistic","banana","band","bane","bank","baptism","barf","base","bay","bears","because",
//   "beers","berserk","body","bone","bonfire","boo","boy","brain","brains","bro","brunch","bunch",
//   "burn","busy","butane","cacti","cafe","camp","can","candy","candycane","canine","cannibal",
//   "cap","car","cheers","china","chocolate","clock","coffees","cone","cook","counts","cover","cow",
//   "coy","coyote","cufflinks","cuisine","cup","cute","cuteness","cyborg","cyclic","cyclone",
//   "cynics","dyes","dynamic","dynamite","dynamo","dynasties","dysfunctional","erosion","erotic",
//   "erupt","essence","faces","false","fat","fear","feline","fence","fetish","fibs","final","fire",
//   "flash","flog","flow","fog","forever","fraction","frog","frolic","fry","fun","function",
//   "functional","functions","fusion","gala","gasp","gear","gene","generation","genesis","genius",
//   "hack","hacker","hackers","halos","harp","has","hats","heat","heinous","helicopter","heretic",
//   "honk","hook","hose","hundreds","hymn","hymnal","hyperbolic","icky","icon","inclines","inspire",
//   "insulin","iron","irresponsibilities","kick","kind","knife","knits","know","krypton","lab",
//   "lady","lifespan","lips","lubrication","lucky","mock","mockery","more","motion","mouse","neon",
//   "nits","notification","nun","osmosis","ostentatious","pancreas","papyrus","patcher","patchier",
//   "phone","physics","pirate","play","player","poacher","poison","police","polish","posh","pounds",
//   "preparer","pretender","psychic","puffer","raccoon","rage","recluse","rescues","researh",
//   "resin","responsibilities","retina","reunite","reverse","rhubarb","rub","ruby","ruin","run",
//   "rune","rush","sack","sag","salvation","sarcasm","sassy","satin","scallion","scandal","scares",
//   "scotch","septic","sickness","siphon","skunk","sniper","snowy","soccer","sociopath","spam",
//   "span","spin","sure","tavern","taxes","teach","team","tetanus","tether","that","thin","think",
//   "tick","ticklish","under","unicorns","union","unreal","use","utah","vaccine","vampire","verse",
//   "violin","virus","viscosities","voice","vote","war","wash","wasp","watch","water","what","when",
//   "who","wife","wise","witch","with","won","wonder","wonky","yams","yards","yarn","yikes","you",
//   "youth","yucky"
// ]