import NavigationTile from '../../components/NavigationTile'

import NAVIGATION_ROUTES from '../../consts/NavigationConsts'

import './LandingView.scss'

const LandingNavTiles = () => {
  const handleNavigation = (route: string) => {
    console.log(route) // TODO change with navigation
  }
  return (
    <div id="landing-nav-tiles-container">
      {NAVIGATION_ROUTES.map(r => (
        <NavigationTile
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
