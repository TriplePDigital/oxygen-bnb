import React from "react"
import useSWR, { SWRResponse } from "swr"
import { fetcher } from "../../utils/fetcher"
import PropertyCard from "ui/components/PropertyCard"
import { Property } from "types"

const Index = () => {
  const { data, error } = useSWR<SWRResponse<Property[], Error>>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/properties?populate=pictures`,
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
        <div className="grid grid-cols-5 gap-4">
          {data.data.map((property, propertyIndex) => {
            const {
              title,
              description,
              numOfRooms,
              numOfBathrooms,
              pictures,
              price
            } = property.attributes
            return (
              <PropertyCard
                id={property.id}
                key={propertyIndex}
                description={description}
                title={title}
                numOfRooms={numOfRooms}
                numOfBathrooms={numOfBathrooms}
                image={pictures.data[0]}
                price={price}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Index
