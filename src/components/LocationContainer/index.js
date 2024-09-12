import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {name, imageUrl, description} = locationData

  return (
    <li className="list-item">
      <div className="locationCardContainer">
        <img src={imageUrl} alt={name} className="image" />
        <div className="headingDesContainer">
          <h1 className="heading">{name}</h1>
          <p className="paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationContainer
