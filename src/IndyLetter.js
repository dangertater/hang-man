import React, { useState, createContext, useContext } from "react"

export default function IndyLetter(props) {
	let [guessedLetterMatches, setGuessedLetterMatches] = useState()
	let [guessedLetterDoesntMatch, setguessedLetterDoesntMatch] = useState()
	//q4e, how am i fucking it up, need to get useContext functional
	//----i am moving forward as if this worked :(
	// let contextSolutionWord = React.useContext(solutionWordContext)
	// let checkAgainstSolution = (letterInQuestion) => {
	// 	for (let i = 0; i < contextSolutionWord.length; i++) {
	// 		if (letterInQuestion === contextSolutionWord[i]) {
	// 			setGuessedLetterMatches(letterInQuestion)
	// 			//should I be calling these function in App.js so that I can render an
	// 		} else {
	// 			setguessedLetterDoesntMatch(letterInQuestion)
	// 		}
	// 	}
	// }
	return (
		<>
			<button key={`button${props.mappedLetter}`} onClick={(e) => {}}>
				{props.mappedLetter}
			</button>
		</>
	)
}
