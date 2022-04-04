import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'

import './Layout.scss'

const AppLayout = () => {
  return (
    <div>
      <TopBar />
      {/* <SideDrawer> */}
      <div id="layout-children">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
