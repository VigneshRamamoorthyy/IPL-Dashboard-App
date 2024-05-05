import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamList} = props
  const {id, teamImageUrl, name} = teamList
  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
