type CounterProps = {
	count: number;
	inc: () => void;
};

const badCode = (count: number) => {
	if (count === 2) {
		throw new Error("You shall not pass!");
	}
};

export function Counter({ count, inc }: CounterProps) {
	// -----------Step 3-------------------
	// Now, the react app will crash
	// Because this function call happens every time this component re-renders
	// and renderring is handeled by React
	badCode(count);

	const onClick = () => {
		// -----------Step 1-------------------
		// In this case, the React App will not crash because error is happening inside this function which is executed by JavaScript and is not renderred when this component is renderred
		// However the increment functionality will not work but the React app will also not crash
		// The error can be seen in the console
		// We can handle this type of situation using simple try catch and does not have to use React Error Boundary
		// This function is executed by JavaScript when event is triggered and not by React
		// badCode(count);

		// -----------Step 2-------------------
		// Now, the react app will not crash and also keep working as expected as well
		// Error will be visible in console
		// try {
		// 	badCode(count);
		// } catch (e) {
		// 	console.log(e);
		// }

		// Increment the count value by 1
		inc();
	};

	return (
		<>
			<div>Count: {count}</div>
			<button onClick={onClick}>+</button>
		</>
	);
}
