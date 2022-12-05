import React from "react"

export default function IndySolutionLetter(props) {
	let randomLetter = () => {
		return Math.floor(Math.random() * 26)
	}
	let indySolutionLetter = [``, props.alphabet[randomLetter()]]
	return <>{indySolutionLetter}</>
}
// let letter = props.alphabet[randomLetter(props.num)]
