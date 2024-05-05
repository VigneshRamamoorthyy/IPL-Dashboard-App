import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamList: formattedData,
      isLoading: false,
    })
  }

  renderTeamList = () => {
    const {teamList} = this.state

    return (
      <div>
        <div className="render-teamlist-container">
          <ul className="team-lists-container">
            {teamList.map(eachTeam => (
              <TeamCard teamList={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoading = () => (
    <div className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="team-list-container">
          <div className="ipl-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="ipl-title">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoading() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}

export default Home
