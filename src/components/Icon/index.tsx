/**
 * @file 封装 FontAwesomeIcon
 */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProps } from './types'

export const Icon: React.FC<IconProps> = ({
  color,
  size,
  icon,
  marginLeft,
  marginRight,
}) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      style={{
        height: size,
        width: size,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    />
  )
}
