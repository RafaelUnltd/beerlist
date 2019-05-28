import styled from 'styled-components/native'

import Container from './Container'

const Column = styled(Container)`
  flex-direction: column;
  justify-content: ${props => props.vertical || 'flex-start'};
  align-items: ${props => props.horizontal || 'flex-start'};
`

export default Column
