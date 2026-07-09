import certificatesData from "@/data/certificate.json"
import AwardsCertificatePage from "./certificate-client"

export default function Page() {
  return <AwardsCertificatePage certificates={certificatesData} />
}
