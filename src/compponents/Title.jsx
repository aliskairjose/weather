import PropTypes from "prop-types";

export default function Title({title}) {
  return (
    <div className="w-full text-center">
        <h1 className="mb-4">{title}</h1>
        <p className="text-gray-500 w-8/12 mx-auto">
          The `Recent Search Weather` section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>
      </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
