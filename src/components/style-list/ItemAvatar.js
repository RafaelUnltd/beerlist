import React from 'react'
import styled from 'styled-components/native'

const ItemAvatar = props => (
  <AvatarCircle>
    <AvatarText>{props.name && props.name.toUpperCase()[0]}</AvatarText>
  </AvatarCircle>
)

export default ItemAvatar

const AvatarCircle = styled.View`
  height: 56;
  width: 56;

  border-radius: 28;
  background-color: white;
  justify-content: center;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;

  elevation: 5;
`

const AvatarText = styled.Text`
  font-weight: 600;
  font-size: 22;
  color: ${props => props.theme.colors.main};
  text-align: center;
`
