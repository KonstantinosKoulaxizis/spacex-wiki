import { useNavigate } from 'react-router-dom'

import NavigationTile from '../../components/NavigationTile'

import NAVIGATION_ROUTES from '../../consts/NavigationConsts'

import './LandingView.scss'

const LandingNavTiles = () => {
  const navigate = useNavigate()

  const handleNavigation = (route: string) => {
    navigate(`../${route}`)
  }
  return (
    <div id="landing-nav-tiles-container">
      {NAVIGATION_ROUTES.map(r => (
        <NavigationTile
          key={r.route}
          tileText={r.text}
          tileImage={r.image}
          tileRoute={r.route}
          tileAction={handleNavigation}
        />
      ))}
    </div>
  )
}

export default LandingNavTiles
