import { FunctionComponent } from 'react'

import NavigationTileInterface from '../../interfaces/NavigationTileInterface'

const NavigationTile: FunctionComponent<NavigationTileInterface> = ({
  tileText,
  tileImage,
  tileRoute,
  tileAction
}) => {
  const handleClickTile = () => {
    tileAction(tileRoute)
  }
  return (
    <div onClick={handleClickTile}>
      <div>{tileImage}</div>
      <div>{tileText}</div>
    </div>
  )
}

export default NavigationTile
