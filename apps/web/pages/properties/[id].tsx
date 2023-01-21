import React from "react"
import { Property } from "types"
import useSWR, { SWRResponse } from "swr"
import { fetcher } from "../../utils/fetcher"
import { useRouter } from "next/router"
import { FiStar } from "react-icons/fi"

const PropertyIDPage = () => {
  const { id } = useRouter().query
  const { data, error } = useSWR<SWRResponse<Property, Error>>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}?populate=*`,
    fetcher
  )
  if (!data) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error</div>
  }
  return (
    data.data && (
      <section>
        <div className="relative w-full flex gap-2">
          <img
            className="w-2/3 object-cover h-80 rounded-2xl"
            src={`${process.env.NEXT_PUBLIC_API_URL}${data.data.attributes.pictures.data[0].attributes.formats.large.url}`}
            alt=""
          />
          <div className="w-1/3 grid grid-cols-2 gap-2">
            {data.data.attributes.pictures.data.map((picture, pictureIndex) => {
              return (
                <img
                  key={pictureIndex}
                  className="rounded-2xl"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${picture.attributes.formats.thumbnail.url}`}
                  alt=""
                />
              )
            })}
          </div>
        </div>
        <div className="flex justify-between gap-3 mt-3">
          <div className="w-2/3">
            <h1 className="font-bold text-4xl">{data.data.attributes.title}</h1>
            <p>Location: </p>
            <p>Attributes: </p>
            <p className="mt-3 opacity-75">
              {data.data.attributes.description}
            </p>
          </div>
          <div className="w-1/3 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl flex items-center gap-1">
                ${data.data.attributes.price}
                <span className="font-medium text-base opacity-50">
                  / night
                </span>
              </p>
              <p className="flex items-center gap-1">
                <FiStar size={24} />
                <span className="">4.5</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default PropertyIDPage
