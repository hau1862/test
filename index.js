import data from "./data.json" assert {type: "json"};
const { continents } = data;
const countrySelection = document.querySelector("#country");
const countrySelectionContent = continents.map(function (continent) {
	const countryContent = continent.countries.map(function (country) {
		return `<option value="${country.value}" label="${country.label}">${country.label}</option>`;
	}).join("");

	return `<optgroup id="country-optgroup-${continent.name}" label="${continent.name}">${countryContent}</optgroup>`;
}).join("");

countrySelection.innerHTML += countrySelectionContent;

const inputAge = document.querySelector("input[type='number'][name='age']");
inputAge.onkeyup = function (event) {
	const min = Number(event.target.min);
	const max = Number(event.target.max);
	let value = Number(event.target.value);

	if (value > max) {
		value = max;
	} else if (value < min) {
		value = min;
	}

	event.target.value = value;
};

function changeAge(offset) {
	inputAge.stepUp(offset);
}