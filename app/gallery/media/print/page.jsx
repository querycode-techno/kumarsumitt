import printData from "@/data/print.json"
import PrintMediaPage from "./print-client"

export default function Page() {
  return <PrintMediaPage printMediaItems={printData} />
}
