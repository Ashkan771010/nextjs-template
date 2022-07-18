import React, { useState, useEffect } from "react";
import services from "../services/index";

const useProvince = () => {
  const [provinces, setProvinces] = useState<any>([]);

  useEffect(() => {
    services
      .provincesService()
      .then(response => setProvinces(response?.data?.result));
  }, []);

  return { provinces };
};

export default useProvince;
