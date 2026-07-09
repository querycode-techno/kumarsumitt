import stageData from "@/data/stage.json"
import StageShowsPage from "./stage-client"

export default function Page() {
  return <StageShowsPage stage={stageData} />
}
