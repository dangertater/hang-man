import React from "react"
import IndyLetterGen from "./IndyLetterGen"
import IndySolutionLetter from "./IndySolutionLetter"
import test from "./test"

function App() {
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	]

	let numberArray = []
	//takes a number and produces an array with equal number of elements
	let numberToArray = (num) => {
		for (let i = 0; i < num; i++) {
			numberArray.push(i)
		}
	}

	let solutionWordGenerator = (numOfLetters) => {
		numberToArray(numOfLetters)
		numberArray.map((eachElement) => {
			return <IndySolutionLetter key={eachElement} index={eachElement} />
		})
	}

	return (
		<>
			<div className="solution-container">
				<input></input>
				solution placeholdert{solutionWordGenerator(5)}
			</div>
			<div className="letter-container">
				<IndyLetterGen alphabet={alphabet} />
			</div>
		</>
	)
}

export default App
