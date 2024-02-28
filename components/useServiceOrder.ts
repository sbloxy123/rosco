"use client";

import { useCallback, useEffect, useState } from "react";
import type { serviceType } from "@/types";

const useServiceOrder = (initialServices: serviceType[]) => {
  const [services, setServices] = useState<serviceType[]>(() => {
    // Attempt to get a stored order from sessionStorage
    const storedServices = sessionStorage.getItem("servicesOrder");
    return storedServices ? JSON.parse(storedServices) : initialServices;
  });

  // Update sessionStorage whenever services order changes
  useEffect(() => {
    sessionStorage.setItem("servicesOrder", JSON.stringify(services));
  }, [services]);

  const reorderService = useCallback((clickedIndex: number) => {
    setServices((currentServices) => {
      const updatedServices = [...currentServices];
      const itemToMove = updatedServices.splice(clickedIndex, 1)[0];
      updatedServices.push(itemToMove);
      return updatedServices;
    });
  }, []);

  return { services, reorderService };
};

export default useServiceOrder;
