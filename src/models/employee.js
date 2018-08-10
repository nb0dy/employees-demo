import PropTypes from 'prop-types'

export const employee = PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
})