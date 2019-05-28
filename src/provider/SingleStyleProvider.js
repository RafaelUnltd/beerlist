import React from 'react'
import { connect } from 'react-redux'

import { requestStyle } from '../@cdk/actions/SingleStyleActions'

class SingleStyleProvider extends React.PureComponent {
  async componentDidMount () {
    await this.props.request(this.props.id)
  }

  render () {
    return this.props.children(
      this.props.isFetching,
      this.props.data,
      this.props.error
    )
  }
}

const mapStateToProps = store => ({
  isFetching: store.singleStyleState.isFetching,
  data: store.singleStyleState.data,
  error: store.singleStyleState.error
})

const mapDispatchToProps = dispatch => ({
  request: requestStyle(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleStyleProvider)
