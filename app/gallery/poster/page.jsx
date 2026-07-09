import postersData from "@/data/poster.json"
import PosterPage from "./poster-client"

export default function Page() {
  return <PosterPage posters={postersData} />
}
