import React from "react"
import IndyLetter from "react"

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
			<div></div>
			<div className="letter-container">
				<IndyLetter alpahbet={alphabet}></IndyLetter>
			</div>
		</>
	)
}

export default App
