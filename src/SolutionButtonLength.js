import React from "react"
let Button = (props) => {
	return (
		<button
			onClick={() => {
				props.onClick(props.num)
				props.solutionWordGenerator(props.num)
			}}
		>
			{props.num}
		</button>
	)
}

export default function SolutionButtonLength(props) {
	return (
		<div>
			<Button num={4} onClick={props.setSolutionWord} />
			<Button
				num={5}
				onClick={props.setSolutionWord}
				solutionWordGenerator={props.solutionWordGenerator}
			/>
			<Button
				num={6}
				onClick={props.setSolutionWord}
				solutionWordGenerator={props.solutionWordGenerator}
			/>
			<Button
				num={7}
				onClick={props.setSolutionWord}
				solutionWordGenerator={props.solutionWordGenerator}
			/>
			<Button
				num={8}
				onClick={props.setSolutionWord}
				solutionWordGenerator={props.solutionWordGenerator}
			/>
			<Button
				num={9}
				onClick={props.setSolutionWord}
				solutionWordGenerator={props.solutionWordGenerator}
			/>
			<Button
				num={10}
				onClick={props.setSolutionWord}
				solutionWordGenerator={props.solutionWordGenerator}
			/>
		</div>
	)
}
