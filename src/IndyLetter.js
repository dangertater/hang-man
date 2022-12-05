import React from "react"

export default function IndyLetter(props) {
	// let IndyLetterButton =
	return (
		<>
			<button key={`button${props.mappedLetter}`}>{props.mappedLetter}</button>
		</>
	)
}
