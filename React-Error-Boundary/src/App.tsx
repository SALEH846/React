import "./App.css";
import { Counter } from "./Counter";
import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
	// State for counter 1
	const [count, setCount] = useState(0);
	const inc = () => {
		setCount((count) => count + 1);
	};

	// State for counter 2
	const [count2, setCount2] = useState(0);
	const inc2 = () => {
		setCount2((count) => count + 1);
	};

	return (
		<div className="App">
			{/* If there are multiple boundaries which are not nested inside each other, if
      a child of any one of them crashed then the fallback UI will be shown for 
      that Error boundary only */}
			<ErrorBoundary fallback={<div>Counter 1 crashed! 😧</div>}>
				{/* If there are more than one child in the error boundary, if any one them crashes the fallback UI will be shown */}
				<Counter count={count} inc={inc} />
				{/* <Counter count={count2} inc={inc2} /> */}
			</ErrorBoundary>
			<ErrorBoundary fallback={<div>Something went Wrong! 😧</div>}>
				<Counter count={count2} inc={inc2} />
			</ErrorBoundary>
		</div>
	);
}

export default App;
