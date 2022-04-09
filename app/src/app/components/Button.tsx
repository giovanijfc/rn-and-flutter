import React, { ComponentPropsWithoutRef, FC } from 'react'
import { Button as RNButton } from 'react-native'

interface Props {
  onPress?: () => void
  disabled?: boolean
}

export const Button: FC<Props> = ({ children, ...props }) => {
  return <RNButton {...props} title={children as string} color={'#000'} />
}
