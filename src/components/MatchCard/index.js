import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, result, matchStatus, competingTeamLogo} = matchDetails
  const getstatusClassName = () => {
    switch (matchStatus) {
      case 'Won':
        return 'won'
      case 'Lost':
        return 'lost'
      default:
        return ''
    }
  }
  return (
    <li className="recent_matches-card">
      <img
        src={competingTeamLogo}
        className="recent-match-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-match-team">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={`recent-match-status ${getstatusClassName()}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
