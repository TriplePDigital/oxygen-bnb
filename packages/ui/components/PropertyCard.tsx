import React from "react"
import { FaBed, FaToiletPaper } from "react-icons/fa"
import Link from "next/link"
import { StrapiPicture } from "types"

const PropertyCard = ({
  id,
  title,
  description,
  image,
  numOfRooms,
  numOfBathrooms,
  price
}: PropertyCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      {image ? (
        <img
          className="absolute w-full object-cover h-40"
          src={`${process.env.NEXT_PUBLIC_API_URL}${image.attributes.formats.thumbnail.url}`}
          alt=""
        />
      ) : (
        <div className="absolute inset-0 bg-gray-100" />
      )}
    </div>
    <div className="p-6 mt-40">
      <Link href={`properties/${id}`}>
        <h4 className="text-xl font-semibold">{title}</h4>
      </Link>
      <p className="mt-1 text-gray-500 text-sm">{description.slice(0, 75)}</p>
      <div className="mt-6 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 w-1/2">
            <div className="flex items-center">
              <FaBed className="opacity-50" />
              <span className="ml-2 text-gray-600 text-sm">{numOfRooms}</span>
            </div>
            <div className="flex items-center w-1/2">
              <FaToiletPaper className="opacity-50" />
              <span className="ml-2 text-gray-600 text-sm">
                {numOfBathrooms}
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-gray-600 text-base font-bold">
              ${price} / night
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

interface PropertyCardProps {
  id: string
  title: string
  description: string
  image: StrapiPicture
  numOfRooms: number
  numOfBathrooms: number
  price: number
}

export default PropertyCard
