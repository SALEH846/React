import React from "react";

type State = { hasError: boolean };

// -----------Step 4-------------------
// Error Booudary can only be defined using the class component
export class ErrorBoundary extends React.Component<{
	children: React.ReactNode;
	fallback: React.ReactNode;
}> {
	// initial state
	state: State = { hasError: false };

	// We also have to define the derived state to which we want our component to transition to
	// Due to this lifecycle method, the Error boundary must be a class component because it is only available in class components
	// Should not perform any side effects inside this life cycle method such as firing events
	// Simply return the updated state without any side effects because this method is called during the renderring process
	static getDerivedStateFromError(error: Error): State {
		return { hasError: true };
	}

	// for performing side effects
	// Error --> contains the JS call Stack --> This is JS thing
	// ErrorInfo --> contains the component hierarchy --> This is provided by React
	override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log(error);
		console.log(errorInfo);
	}

	render() {
		// In case of Error, we provide the fallback UI
		if (this.state.hasError) {
			return this.props.fallback;
		}

		// UI, if there is no error
		return this.props.children;
	}
}

// The above class component's equivalent functional component
// The reason we cannot use functional components for defining Error boundary is the unavailablility of life cycle methods in them
// const SameAs = (props: {children: React.ReactNode}) => {
//     return props.children;
// }
