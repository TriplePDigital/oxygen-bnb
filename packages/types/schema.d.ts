export interface StrapiPictureFormat {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  url: string
}

export interface StrapiPicture {
  id: string
  attributes: {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      large: StrapiPictureFormat
      medium: StrapiPictureFormat
      small: StrapiPictureFormat
      thumbnail: StrapiPictureFormat
    }
    hash: string
    ext: ".jpg" | ".png" | ".jpeg"
    mime: "image/jpeg" | "image/png" | "image/jpg"
    size: number
    url: string
    previewUrl: null | string
    provider: "local"
    // eslint-disable-next-line camelcase
    provider_metadata: null | string
    createdAt: string
    updatedAt: string
  }
}

export interface Property {
  id: string
  attributes: {
    title: string
    description: string
    numOfRooms: number
    numOfBathrooms: number
    price: number
    pictures: {
      data: StrapiPicture[]
    }
  }
}
