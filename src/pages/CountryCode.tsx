import { countryCode } from "@/api/countryCode";
import type { Info } from "@/types/infoCountry";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoCard from "@/components/InfoCountry";

export default function CountryCode() {
  const { code } = useParams<{ code: string }>();
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

    if (code) {
      searchCountry();
    }
  }, [code]);

  if (loading) {
    return <p>Cargando Datos...</p>;
  }

  if (data) {
    const years = data.populationData.map((item) => item.year);
    const population = data.populationData.map((item) => item.value);

    return (
      <>
        <InfoCard info={data} years={years} population={population} />
      </>
    );
  }

  return <p>No se encontraron datos para el código proporcionado.</p>;
}
