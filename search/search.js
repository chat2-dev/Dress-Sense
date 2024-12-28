// JSON data
const data = {
  "items": [
    {
      "category": "Fabric",
      "name": "Cotton",
      "origin": "India",
      "cost_per_meter": "₹300",
      "type": "Natural",
      "best_for": "Skin-friendly, summer wear",
      "tags": ["soft", "breathable", "durable"]
    },
    {
      "category": "Fabric",
      "name": "Silk",
      "origin": "China",
      "cost_per_meter": "₹1000",
      "type": "Natural",
      "best_for": "Luxury, traditional wear",
      "tags": ["smooth", "shiny", "expensive"]
    },
    {
      "category": "Dress Type",
      "name": "Saree",
      "origin": "India",
      "description": "Traditional Indian attire worn by women.",
      "tags": ["traditional", "elegant", "festive"]
    },
    {
      "category": "Dress Type",
      "name": "Blazer",
      "origin": "Europe",
      "description": "Formal jacket often worn in professional settings.",
      "tags": ["formal", "professional", "stylish"]
    },
    {
      "category": "Fashion Trend",
      "name": "Street Style",
      "year": 2023,
      "description": "Casual and comfortable clothing influenced by urban culture.",
      "tags": ["casual", "urban", "modern"]
    },
    {
      "category": "Fashion Trend",
      "name": "Sustainable Fashion",
      "year": 2022,
      "description": "Clothing made from eco-friendly materials and practices.",
      "tags": ["eco-friendly", "green", "sustainable"]
    }
  ]
};

// Search function
function searchItems(query) {
  const results = data.items.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    );
  });
  return results;
}

// Event listener for search
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value;
  const results = searchItems(query);

  // Display results
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach(item => {
      const resultItem = `
        <div class="result-item">
          <h3>${item.name}</h3>
          <p>Category: ${item.category}</p>
          ${item.origin ? `<p>Origin: ${item.origin}</p>` : ""}
          ${item.cost_per_meter ? `<p>Cost: ${item.cost_per_meter}</p>` : ""}
          ${item.best_for ? `<p>Best For: ${item.best_for}</p>` : ""}
          ${item.description ? `<p>Description: ${item.description}</p>` : ""}
        </div>
      `;
      resultsDiv.innerHTML += resultItem;
    });
  }
});
      
