"use client";

import type { serviceType } from "@/types";
import ServiceItem from "@/components/ServiceItem";
import useServiceOrder from "./useServiceOrder";

export default function DetailedServiceList({
  allServices,
}: {
  allServices: serviceType[];
}) {
  const { services, reorderService } = useServiceOrder(allServices);

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
