import React, { useState } from "react"
import IndyLetterGen from "./IndyLetterGen"
import IndySolutionLetter from "./IndySolutionLetter"
import SolutionButtonLength from "./SolutionButtonLength"

function App() {
	let [solutionWord, setSolutionWord] = useState("default")
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
			return (
				<IndySolutionLetter
					key={eachElement}
					index={eachElement}
					alphabet={alphabet}
				/>
			)
		})
	}

	return (
		<>
			<>current solution word is {solutionWord}</>
			<div className="solution-container">
				{solutionWordGenerator(numberArray.length)}
			</div>
			Click to change word length
			<SolutionButtonLength
				//sets solution word to specified legth
				setSolutionWord={setSolutionWord}
				solutionWordGenerator={solutionWordGenerator()}
			/>
			<div></div>
			{/* indySolutionLetter being rendered outside of app func */}
			<div className="guesedLetters"></div>
			<div></div>
			<div className="letter-container">
				<IndyLetterGen alphabet={alphabet} />
			</div>
		</>
	)
}

export default App
