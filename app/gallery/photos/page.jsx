import galleryPhotosData from "@/data/galleryPhotos.json"
import PhotosVideosPage from "./photos-client"

export default function Page() {
  return <PhotosVideosPage galleryPhotos={galleryPhotosData} />
}
