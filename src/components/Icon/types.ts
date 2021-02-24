/**
 * @file IconProps
 */

import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type IconDefinition = IconProp

export type IconProps = {
  icon: IconProp
  size?: number
  color?: string
  marginLeft?: number
  marginRight?: number
}
