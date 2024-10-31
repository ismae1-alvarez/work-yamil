import React from "react";
import { Info } from "@/types/infoCountry"; 

interface CountryCardProps {
    info: Info; 
}

const InfoCard: React.FC<CountryCardProps> = ({ info }) => {
    return (
        <div className="max-w rounded overflow-scroll shadow-lg ">
            <img className="w-full h-48 object-cover" src={info.flagUrl} alt={`${info.country} flag`} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{info.country}</h2>
                <h3 className="text-lg font-semibold mb-2">Fronteras:</h3>
                <ul className="list-disc list-inside mb-2">
                    {info.borders.map((border, index) => (
                        <li key={index}>
                            {border.commonName} ({border.officialName})
                        </li>
                    ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Datos de Población:</h3>
                <ul className="list-disc list-inside mb-2">
                    {info.populationData.map((data, index) => (
                        <li key={index}>
                            {data.year}: {data.value} personas
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoCard;
