import React, { ComponentPropsWithoutRef, FC } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Input: FC<ComponentPropsWithoutRef<typeof TextInput>> = props => {
  return <StyledInput {...props} />
}

const StyledInput = styled.TextInput.attrs({
  selectionColor: '#000'
})`
  height: 50px;
  width: 100%;
  padding: 0px 10px;
  border-width: 2px;
  border-color: #000;
  border-radius: 8px;
` as unknown as typeof TextInput
