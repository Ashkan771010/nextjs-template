import React, { useState, useEffect } from "react";
import services from "../services/index";

const useCity = (stateId: number = 1) => {
  const [cities, setCities] = useState<any>([]);

  useEffect(() => {
    services
      .citiesService(stateId)
      .then(response => setCities(response?.data.result));
  }, [stateId]);

  return { cities };
};

export default useCity;
