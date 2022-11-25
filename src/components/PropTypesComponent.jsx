import PropTypes from 'prop-types'

const PropTypesComponent = ({ title, subtitle, someData }) => {
  return (
    <>
      <h2>{ title }</h2>
      <p>{ subtitle }</p>
      <p>{ someData }</p>
    </>
  )
}

PropTypesComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}

PropTypesComponent.defaultProps = {
  title: 'No title',
  someData: 'data'
}

export default PropTypesComponent
