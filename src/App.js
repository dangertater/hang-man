import React from "react"
import IndyLetterGen from "./IndyLetterGen"
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
	return (
		<>
			<div>asdf</div>
			<div className="letter-container">
				<IndyLetterGen alphabet={alphabet} />
			</div>
		</>
	)
}

export default App
