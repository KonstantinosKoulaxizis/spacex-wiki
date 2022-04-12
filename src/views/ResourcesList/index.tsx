import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ResourceRoutesEnum from '../../models/enums/ResourceRoutesEmu'
import ResourceView from '../../components/ResourceView'

const ResourcesList = () => {
  const navigate = useNavigate()
  const { resource } = useParams()
  const resourceRoutes: string[] = Object.values(ResourceRoutesEnum)

  useEffect(() => {
    if (resource && !resourceRoutes.includes(resource)) {
      navigate('../404')
    }
  }, [navigate, resource, resourceRoutes])
  return (
    <div>
      <ResourceView />
    </div>
  )
}

export default ResourcesList
