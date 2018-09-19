import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const StarRating = (props, context) => {
  const { value } = this.props

  return React.createElement(
    'div',
    {},
    <span>Hello World! Your value is ${value} </span>
  )
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
