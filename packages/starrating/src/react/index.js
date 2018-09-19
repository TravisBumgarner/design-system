import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import Icon from '@pluralsight/ps-design-system-icon/react'

import css from '../css'
import * as vars from '../vars'

const TOTAL_STARS = 5

const FullStarIcon = <Icon id={Icon.ids.caretUp} size={Icon.sizes.large} />

const EmptyStarIcon = <Icon id={Icon.ids.caretDown} size={Icon.sizes.large} />

const HalfStarIcon = <Icon id={Icon.ids.caretRight} size={Icon.sizes.large} />

const StarRating = (props, context) => {
  const { value } = props

  const halfIntRoundedValue = Math.floor(value * 2) / 2

  let fullStars = Math.floor(halfIntRoundedValue)
  let halfStars =
    Math.floor(halfIntRoundedValue) !== halfIntRoundedValue ? 1 : 0

  const allStars = []

  while (allStars.length < TOTAL_STARS) {
    if (fullStars) {
      allStars.push(FullStarIcon)
      fullStars--
    } else if (halfStars) {
      allStars.push(HalfStarIcon)
      halfStars--
    } else {
      allStars.push(EmptyStarIcon)
    }
  }

  return React.createElement('div', {}, allStars)
}

StarRating.propTypes = {
  value: PropTypes.number
}

StarRating.defaultProps = {
  value: null
}

StarRating.contextTypes = {}

StarRating.sizes = vars.sizes
export const sizes = vars.sizes

export default StarRating
