import {Component, ErrorInfo, ReactNode} from 'react'
import './ErrorBoundary.css'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(): State {
    return {hasError: true}
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='error-fallback'>
          <h1>Oops! Something went wrong.</h1>
          <p>
            We're sorry for the inconvenience. Please try refreshing the page or
            contact support if the problem persists.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
