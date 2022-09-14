import { useEffect, useId } from "react"
import { useSearchParams } from "react-router-dom"
import Masonry from "react-masonry-css"

import PostCard from "components/PostCard"
import { useAppSelector } from "redux/hooks"
import { useDebounce, usePosts } from "helpers"
import Loading from "./Loading"

const breakpointColumns = {
  default: 3,
  1440: 3,
  1024: 2,
  768: 1,
}

function PostList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { searchInput: searchInputValue } = useAppSelector(
    ({ searchInput }) => searchInput
  )
  const debouncedSearchQuery = useDebounce(searchInputValue, 700)

  const { data, isFetching } = usePosts(searchParams.get("q") as string, 1)

  useEffect(() => {
    setSearchParams({ q: searchInputValue })
  }, [debouncedSearchQuery])

  const prefix = useId()
  return (
    <div className="mt-10">
      {isFetching ? (
        <div className="grid h-96 place-items-center">
          <Loading />
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* array of JSX items */}
          {data.hits?.map((item: any, idx: number) => (
            <PostCard item={item} idx={idx} key={`${prefix}-${idx}`} />
          ))}
        </Masonry>
      )}
    </div>
  )
}

export default PostList
