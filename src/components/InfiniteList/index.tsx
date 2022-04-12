import { useState, useRef, useEffect } from 'react'

import { FunctionComponent } from 'react'
import InfiniteListInterface from '../../models/interfaces/InfiniteListInterface'

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight
}

const InfiniteList: FunctionComponent<InfiniteListInterface> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  children
}) => {
  const [initialLoad, setInitialLoad] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialLoad) {
      onBottomHit()
      setInitialLoad(false)
    }
  }, [onBottomHit, initialLoad])

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit()
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [onBottomHit, isLoading, hasMoreData])

  return <div ref={contentRef}>{children}</div>
}

export default InfiniteList
