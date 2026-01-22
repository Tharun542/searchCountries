import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import "./countries.css";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(
                    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
                );
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.error("Error to fetching the countryFlags");
            }
        };
        fetchCountries();
    }, []);

    const filteredCountries = countries.filter((country) => {
        const name =
            country.common ||
            country.name?.common ||
            "";

        return name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                placeholder="search for countries"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flag">
                {filteredCountries.map((country) => {
                    const name =
                        country.common ||
                        country.name?.common;

                    const image =
                        country.png ||
                        country.flags?.png;

                    return (
                        <Cart
                            key={name}
                            image={image}
                            name={name}
                        />
                    );
                })}
            </div>
        </div>
    );
}
