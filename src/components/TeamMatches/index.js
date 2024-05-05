import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getLatestMatchDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    venue: data.venue,
    date: data.date,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getLatestMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatchDetails: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }

    this.setState({
      teamMatchesData: formattedData,
      isLoading: false,
    })
  }

  renderLatestMatchDetails = () => {
    const {teamMatchesData} = this.state
    const {latestMatchDetails} = teamMatchesData

    return <LatestMatch latestMatchDetails={latestMatchDetails} />
  }

  renderMatchCardDetails = () => {
    const {teamMatchesData} = this.state
    const {recentMatchDetails} = teamMatchesData

    return (
      <ul className="recent_match-details-lists">
        {recentMatchDetails.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamDetails = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl} = teamMatchesData
    return (
      <div className="team-details-container">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <h1 className="latest-match-text">Latest Matches</h1>
        {this.renderLatestMatchDetails()}
        {this.renderMatchCardDetails()}
      </div>
    )
  }

  getClassname = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'SH':
        return 'sh'
      case 'MI':
        return 'mi'
      case 'DC':
        return 'dc'
      case 'KXP':
        return 'kxp'
      case 'KKR':
        return 'kkr'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className={`team-matches-container ${this.getClassname()}`}>
        {isLoading ? this.renderLoading() : this.renderTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
