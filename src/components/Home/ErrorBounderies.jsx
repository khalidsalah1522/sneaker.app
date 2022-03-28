import { Component } from "react";

class ErrorBounderies extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("There are an Error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div>There are an Error</div>;
    }
    return this.props.children;
  }
}
export default ErrorBounderies;
