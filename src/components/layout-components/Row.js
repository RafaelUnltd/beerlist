import styled from 'styled-components/native'

import Container from './Container'

const Row = styled(Container)`
  flex-direction: row;
  justify-content: ${props => props.horizontal || 'flex-start'};
  align-items: ${props => props.vertical || 'flex-start'};
`

export default Row
