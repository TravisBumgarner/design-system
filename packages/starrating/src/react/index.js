import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Button from '@pluralsight/ps-design-system-button/react'

import css from '../css'
import * as vars from '../vars'

const TOTAL_STARS = 5

const FullStarIcon = <Icon id={Icon.ids.caretUp} size={Icon.sizes.large} />

const EmptyStarIcon = <Icon id={Icon.ids.caretDown} size={Icon.sizes.large} />

const HalfStarIcon = <Icon id={Icon.ids.caretRight} size={Icon.sizes.large} />

const StarRating = (props, context) => {
  const { value, onClick } = props

  const halfIntRoundedValue = Math.floor(value * 2) / 2

  let fullStars = Math.floor(halfIntRoundedValue)
  let halfStars =
    Math.floor(halfIntRoundedValue) !== halfIntRoundedValue ? 1 : 0

  const StarIcons = []

  while (StarIcons.length < TOTAL_STARS) {
    if (fullStars) {
      StarIcons.push(FullStarIcon)
      fullStars--
    } else if (halfStars) {
      StarIcons.push(HalfStarIcon)
      halfStars--
    } else {
      StarIcons.push(EmptyStarIcon)
    }
  }

  let Stars

  if (onClick) {
    Stars = StarIcons.map((icon, index) => {
      const ratingValue = index + 1
      return (
        <Button
          onClick={() => onClick(ratingValue) || null}
          icon={icon}
          appearance={Button.appearances.flat}
          size={Button.sizes.large}
        />
      )
    })
  } else {
    Stars = StarIcons
  }

  return React.createElement('div', {}, Stars)
}

StarRating.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
}

StarRating.defaultProps = {
  value: null,
  onClick: null
}

StarRating.contextTypes = {}

StarRating.sizes = vars.sizes
export const sizes = vars.sizes

export default StarRating
