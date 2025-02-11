import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollReset extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollReset)
