export default function Travel(props) {
  console.log(props);
  return(
    <div className="journey-card">
      <div className="card-left">
        <img src={props.info.imageUrl} alt="Location image" className="location-img" />
      </div>
      <div className="card-right">
        <p className="location">
          <span className="pointer"></span>
          <span className="country">{props.info.location}</span>
          <a href={props.info.googleMapsUrl} className="maps-link" target="_blank">View on Google Maps</a>
        </p>
        <p className="title">{props.info.title}</p>
        <p className="date">{props.info.startDate} - {props.info.endDate}</p>
        <p className="description">{props.info.description}</p>
      </div>
    </div>
  )
}