const API_URL = "https://swapi.tech/api/people"; // Endpoint for Star Wars characters

// Function to fetch data from SWAPI, handling pagination
async function fetchSWAPI() {
  const allItems = [];
  let nextPage = API_URL;

  while (nextPage) {
    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      // Add the current page's results to the allItems array
      allItems.push(...data.results);

      // Check if there is a next page
      nextPage = data.next;
    } catch (error) {
      console.error("Failed to fetch data from SWAPI:", error);
      break;
    }
  }

  return allItems.map((item) => item.name); // Extract 'name' property from each item
}

function filterAndSort(data, text, asc) {
  return data
    .filter((i) => text.length === 0 || i.toLowerCase().includes(text.toLowerCase())) // Case-insensitive filter
    .sort(
      asc
        ? (a, b) => (a > b ? 1 : a === b ? 0 : -1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

// Function to fetch items with filtering and sorting
export async function fetchItems(filter = "", asc = true) {
  const items = await fetchSWAPI(); // Fetch data from SWAPI
  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(items, filter, asc), // Filter and sort SWAPI data
        }),
    });
  });
}
