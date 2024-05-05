import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    venue,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-card">
      <div className="logo-and-team-details-container">
        <div className=" latest-match-details-sub-1">
          <p className="competing-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-details">{venue}</p>
          <p className="match-details">{result}</p>
        </div>
        <div>
          <img
            className="competing_team_logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="line-break" />
      <div className="latest-match-details-sub-2">
        <p className="innings-header">First Innings</p>
        <p className="latest-match-details">{firstInnings}</p>
        <p className="innings-header">Second Innings</p>
        <p className="latest-match-details">{secondInnings}</p>
        <p className="award-header">Man of the Match</p>
        <p className="latest-match-details">{manOfTheMatch}</p>
        <p className="award-header">Umpires</p>
        <p className="latest-match-details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
