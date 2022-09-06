import PropTypes from 'prop-types'

export const OurItems = ({ title, url, id }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

OurItems.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
