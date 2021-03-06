function GameResults(props) {
  return (
    <article key={props.key} className="job-card">
      <div className="company-logo">
        {props.logo ? (
          <img src={props.logo} alt={props.company} />
        ) : (
          props.company[0]
        )}
      </div>
      <ul className="info">
        <li className="company-name">
          <a href={props.url} target="_blank">
            {props.company}
          </a>
        </li>
        <li className="ocupation">{props.occupation}</li>
        <li className="info-item info-dot ">{props.location}</li>
        <li className="info-item job-type">{props.type}</li>
        <li className="apply-info">
          <a href={props.apply} target="_blank">
            Learn More
          </a>
        </li>
      </ul>
    </article>
  );
}

export default GameResults;
