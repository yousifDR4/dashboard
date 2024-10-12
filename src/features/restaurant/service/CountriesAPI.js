export async function getCities(country) {
  const url = `https://countriesnow.space/api/v0.1/countries/cities/q?country=${country}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return null;
  }
}
export async function getCountries() {
  const url = `https://countriesnow.space/api/v0.1/countries/iso`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Countries:", error);
    return null;
  }
}
