import { countryCode } from "@/api/countryCode";
import InfoCard from "@/components/InfoCountry";
import type { Info } from "@/types/infoCountry";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryCode() {
  const { code } = useParams();

  const [data, setData] = useState<Info>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function searchCountry() {
      setLoading(true);
      try {
        const country = await countryCode(code!);
        setData(country);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    }
    searchCountry();
  }, [code]);

  if (loading) {
    return <p>Cargando Datos...</p>;
  }

  if (data)
    return (
        <InfoCard key={data.country} info={data}/>
    );
}
