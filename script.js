const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

button.addEventListener("click", function(){
  message.textContent = "Welcome to the Business Directory";
});

const greet = () => {
  console.log("Hello");
};

// this is the business profiles 

const businesses = [
  {
    id: 1,
    name: "COGS Refill, Zero Waste & Unpackaged Goods",
    category: "Zero Waste Grocery",
    location: "14 Market Way",
    description: "Plastic-free groceries, refill stations, and local produce.",
    rating: 4.7,
    reviews: [
      "Very friendly staff, fressh produce."
    ]
  },
  {
    id: 2,
    name: "Down to Earth",
    category: "Organic Food Store",
    location: "96 Earlsdon Street",
    description: "Wide range of wholefoods, fairly traded goods and locally sourced produce.",
    rating: 4.5,
    reviews: [
      "Great refill station and very friendly staff.",
      "Good choice of stustainable prodocts."
    ]
  },
  {
    id: 3,
    name: "Zero store",
    category: "Zero Waste Store",
    location: "41 Russell Street",
    description: "Eco cleaning product refills, plastic free toiletries and locally sourced produce.",
    rating: 5,
    reviews: [
      "Lovely fresh produce.",
      "Really good cleaning product selection."
    ]
  }
]

// this is the function for each bsuiness 


const cards = businesses.map((business) => {
  const reviewHtml = business.reviews
    .map((review) => `<li>${review}</li>`)
    .join("");

  return `
    <div class="card">
      <h2>${business.name}</h2>
      <p><strong>Category:</strong> ${business.category}</p>
      <p><strong>Location:</strong> ${business.location}</p>
      <p>${business.description}</p>

      <p><strong>Rating:</strong> ${business.rating} ⭐ </p>
      
      <ul>
        ${reviewHtml}
      </ul>

      <label for="rating-${business.id}">Rate:</label>
      <select id="rating-${business.id}">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>


      <input type="text" id="review-input-${business.id}" placeholder="Write a review">
      <button onclick="addReview(${business.id})">Submit Review</button>
    </div>
  `;
}).join("");

document.getElementById("directory").innerHTML = cards;

// This is star rating inputs 

// This for for the review form 

function addReview(businessId) {
  const input = document.getElementById(`review-input-${businessId}`);
  const ratingSelect = document.getElementById('rating-$businessId}');

  const reviewText = input.value.trim();
  const ratingValue = Number(ratingSelect.value);

  if (!reviewText) return;

  const business = businesses.find((b) => b.id === businessId);
  business.reviews.push('${ratingValue} ⭐ - ${reviewText}');

  const reviewsList = document.getElementById(`reviews-${businessId}`);
  reviewsList.innerHTML += '<li>${ratingValue} ⭐ - ${reviewText}</li>';

  input.value = "";
  ratingSelect.value = "5";
}