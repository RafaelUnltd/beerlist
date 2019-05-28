import styled from 'styled-components/native'

const Container = styled.View`
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `width: ${props.height};`}

  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};

  padding-top: ${props => props.paddingTop || props.padding || 0};
  padding-right: ${props => props.paddingRight || props.padding || 0};
  padding-bottom: ${props => props.paddingBottom || props.padding || 0};
  padding-left: ${props => props.paddingLeft || props.padding || 0};
`

export default Container
