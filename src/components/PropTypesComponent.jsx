import PropTypes from 'prop-types'

export const PropTypesComponent = ({ title, subtitle, someData }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{someData}</p>
    </>
  )
}

PropTypesComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}

PropTypesComponent.defaultProps = {
  // title: 'No title',
  someData: 'data'
}
