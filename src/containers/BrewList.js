import React from 'react'
import { connect } from 'react-redux'
import { debounce } from 'lodash'

import BrewListView from '../views/BrewListView'

import { searchStyles } from '../@cdk/actions/StylesListActions'

class BrewList extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.navigateToDetail = this.navigateToDetail.bind(this)
  }

  handleSearchChange (value) {
    this.props.search(value)
  }

  navigateToDetail (styleId) {
    return () => this.props.navigation.navigate('SingleStyle', { id: styleId })
  }

  render () {
    return (
      <BrewListView
        handleSearchChange={debounce(this.handleSearchChange, 500)}
        navigateToDetail={this.navigateToDetail}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  search: (text) => dispatch(searchStyles(text))
})

export default connect(null, mapDispatchToProps)(BrewList)
