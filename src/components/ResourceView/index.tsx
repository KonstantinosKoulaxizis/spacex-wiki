import { useState } from 'react'

import InfiniteList from '../InfiniteList'

const NUMBERS_PER_PAGE = 50

const ResourceView = () => {
  const [numbers, setNumbers] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const hasMoreData = numbers.length < 500

  const loadMoreNumbers = () => {
    setPage(page => page + 1)
    setLoading(true)
    setTimeout(() => {
      const newNumbers = new Array(NUMBERS_PER_PAGE)
        .fill(1)
        .map((_, i) => page * NUMBERS_PER_PAGE + i)
      setNumbers(nums => [...nums, ...newNumbers])
      setLoading(false)
    }, 800)
  }
  return (
    <div>
      <InfiniteList
        hasMoreData={hasMoreData}
        isLoading={loading}
        onBottomHit={loadMoreNumbers}>
        <ul>
          {numbers.map(n => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </InfiniteList>
    </div>
  )
}

export default ResourceView
