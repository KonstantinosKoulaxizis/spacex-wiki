import { Routes, Route } from 'react-router-dom'

import AppLayout from '../layouts/AppLayout'

import LandingView from '../views/LandingView'
import ResourcesList from '../views/ResourcesList'
import NotFound from '../views/NotFound'

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingView />} />
          <Route path="/:resource" element={<ResourcesList />} />

        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

