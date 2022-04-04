import { Routes, Route, Outlet } from 'react-router-dom'

import LandingView from './views/LandingView'
import NotFound from './views/NotFound'

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingView />} />
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      {/* <TopBar /> */}
      {/* <SideDrawer> */}
      <Outlet />
    </div>
  )
}
