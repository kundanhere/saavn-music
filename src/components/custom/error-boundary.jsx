import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo); // Log the error for debugging
  }

  render() {
    if (this.state.hasError) {
      // Render the fallback UI or display an error message
      return this.props.fallback;
    }

    // Render the children components without error
    return this.props.children;
  }
}

export default ErrorBoundary;
