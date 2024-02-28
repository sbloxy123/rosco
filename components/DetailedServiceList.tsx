"use client";

import { useState } from "react";
import type { serviceType } from "@/types";
// import { getServiceLinks } from "@/sanity/sanity.query";
import ServiceItem from "@/components/ServiceItem";
import useServiceOrder from "./useServiceOrder";

export default function DetailedServiceList({
  allServices,
}: {
  allServices: serviceType[];
}) {
  // const allServices: serviceType[] = await getServiceLinks();
  const { services, reorderService } = useServiceOrder(allServices);

  // const [serviceOrder, setServiceOrder] = useState([...allServices]);

  // Function to handle click event when a link is clicked
  // const handleServiceLinkClick = (clickedIndex: number) => {
  //   setServiceOrder((prevOrder) => {
  //     const updatedOrder = [
  //       ...prevOrder.slice(0, clickedIndex),
  //       ...prevOrder.slice(clickedIndex + 1),
  //       prevOrder[clickedIndex],
  //     ];
  //     return updatedOrder;
  //   });
  // };

  return (
    <div>
      {services.map((service, index) => {
        return (
          <div key={service._id}>
            <ServiceItem
              key={service._id}
              title={service.serviceTitle}
              slug={service.slug}
              image={service.servicePageImage}
              heading={service.serviceSummary}
              text={service.description}
              index={index}
              onClick={() => reorderService(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
