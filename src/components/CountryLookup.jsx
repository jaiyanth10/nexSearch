"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch("http://ip-api.com/json/")
        .then((res) => res.json())
        .then((data) => {
          const region = data?.region || " ";
          const country = data?.country || "United States";
          return `${region}${" "}${country}`;
        });
      if (!response) return;
      console.log(response);
      setCountry(response);
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
}
