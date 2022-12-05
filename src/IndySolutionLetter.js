import React from "react"

export default function IndySolutionLetter(props) {
	let randomLetter = Math.floor(Math.random() * 26)

	let indySolutionLetter = [
		` solution element ${props.index} placeholder/`,
		JSON.stringify(props.index),
	]
	return <>{indySolutionLetter[0]}</>
}
