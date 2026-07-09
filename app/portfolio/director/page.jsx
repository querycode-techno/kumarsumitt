import stageData from "@/data/stage.json"
import DirectorPortfolioPage from "./director-client"

export default function Page() {
  return <DirectorPortfolioPage stage={stageData} />
}
