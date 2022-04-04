interface NavigationTileInterface {
  tileText: string
  tileImage: string
  tileRoute: string
  tileAction: (route: string) => void
}

export default NavigationTileInterface
