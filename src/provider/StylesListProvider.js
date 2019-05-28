import React from 'react'
import { connect } from 'react-redux'

import { requestStylesList } from '../@cdk/actions/StylesListActions'

class StylesListProvider extends React.PureComponent {
  async componentDidMount () {
    await this.props.requestList()
  }

  render () {
    return this.props.children(
      this.props.isFetching,
      this.props.filteredData || this.props.data,
      this.props.error
    )
  }
}

const mapStateToProps = store => ({
  isFetching: store.stylesListState.isFetching,
  data: store.stylesListState.data,
  filteredData: store.stylesListState.filteredData,
  error: store.stylesListState.error
})

const mapDispatchToProps = dispatch => ({
  requestList: requestStylesList(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(StylesListProvider)
