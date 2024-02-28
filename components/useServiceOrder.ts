"use client";

import { useCallback, useEffect, useState } from "react";
import type { serviceType } from "@/types";
const useServiceOrder = (initialServices: serviceType[]) => {
  // Initialize services state with a function to avoid accessing sessionStorage during SSR
  const [services, setServices] = useState<serviceType[]>(() => {
    if (typeof window !== "undefined") {
      // Attempt to get a stored order from sessionStorage, but only if window is defined
      const storedServices = sessionStorage.getItem("servicesOrder");
      return storedServices ? JSON.parse(storedServices) : initialServices;
    }
    return initialServices; // Fallback to initialServices if window is not available
  });

  // Update sessionStorage whenever services order changes, also checking for window availability
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("servicesOrder", JSON.stringify(services));
    }
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
