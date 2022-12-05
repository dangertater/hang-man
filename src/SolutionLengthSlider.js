import React from "react"

export default function SolutionLengthSlider() {
	return (
		<>
			<SolutionLengthSlider
				defaultValue={30}
				step={10}
				marks
				min={10}
				max={110}
				disabled
			/>
		</>
	)
}
