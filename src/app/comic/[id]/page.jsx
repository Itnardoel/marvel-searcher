import { fetchComicById } from "@/utils/utils"
import ComicDetail from "@/components/Comics/ComicDetail"

const ComicDetailPage = async ({ params }) => {
  const {
    data: {
      results: [comic],
    },
  } = await fetchComicById(params.id)

  const [writer] = comic.creators.items.filter((creator) => {
    if (creator.role.includes("riter")) {
      return creator.name
    }
  })

  const [penciller] = comic.creators.items.filter((creator) => {
    if (creator.role.includes("enciller")) {
      return creator.name
    }
  })

  const [coverArtist] = comic.creators.items.filter((creator) => {
    if (creator.role.includes("cover")) {
      return creator.name
    }
  })

  const published = new Date(comic.dates[0].date.toString())

  return (
    <ComicDetail
      comic={comic}
      published={published}
      writer={writer || ""}
      penciller={penciller || ""}
      coverArtist={coverArtist || ""}
    />
  )
}

export default ComicDetailPage
