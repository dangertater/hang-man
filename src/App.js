import React, { useState, createContext } from "react"
import IndyLetterGen from "./IndyLetterGen"
import IndySolutionLetter from "./IndySolutionLetter"
import SolutionLengthSlider from "./SolutionLengthSlider"
import test from "./test"

//I have veered in two directions
//----one in which the input window sets the solution word, and one in which a random word is generated random series of letters really, based off inputWindows number
//----either way though I need to be able to setState from a child componenet which I am unsure of how to do

function App() {
	let [solutionWord, setSolutionWord] = useState("default")
	let solutionWordContext = React.createContext(solutionWord)
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
		return numberArray.map((eachElement) => {
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
			<solutionWordContext.Provider value={solutionWord}>
				<SolutionLengthSlider
					defaultValue={30}
					step={10}
					marks
					min={10}
					max={110}
					disabled
				/>{" "}
				<>current solution word is {solutionWord}</>
				<div className="solution-container">
					solution placeholder{solutionWordGenerator(7)}
				</div>
				<div className="guesedLetters"></div>
				<div></div>
				<div className="letter-container">
					<IndyLetterGen alphabet={alphabet} />
				</div>
			</solutionWordContext.Provider>
		</>
	)
}

export default App
