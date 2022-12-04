import React from "react"
import IndyLetter from "./IndyLetter"

export default function IndyLetterGen(props) {
	let IndyLetterGenerator = (alphabet) => {
		return alphabet.map((mappedLetter) => {
			return <IndyLetter mappedLetter={mappedLetter} key={mappedLetter} />
		})
	}
	return <>{IndyLetterGenerator(props.alphabet)}</>
}
