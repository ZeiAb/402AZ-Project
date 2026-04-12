const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", function () {
    message.textContent = "Welcome to the Business Directory";
  });
}

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
    image: "Images/business1.jpg",
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
    image: "Images/buisness2.jpeg",
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
    image: "Images/business3.jpeg",
    reviews: [
      "Lovely fresh produce.",
      "Really good cleaning product selection."
    ]
  }
]

// this is the function for each business

const cards = businesses.map((business) => {
  const reviewHtml = business.reviews
    .map((review) => `<li>${review}</li>`)
    .join("");

  return `
    <div class="card">
      <img src="${business.image}" alt="${business.name}" class="business-image">
      <h2>${business.name}</h2>
      <p><strong>Category:</strong> ${business.category}</p>
      <p><strong>Location:</strong> ${business.location}</p>
      <p>${business.description}</p>
      <p><strong>Rating:</strong> ${business.rating} ⭐</p>

      <div>
        <p><strong>Reviews:</strong></p>
        <ul id="reviews-${business.id}">
          ${reviewHtml}
        </ul>
      </div>

      <label for="rating-${business.id}">Rate this business</label>
      <select id="rating-${business.id}">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>

      <input type="text" id="review-input-${business.id}" placeholder="Write a review">
      <button onclick="addReview(${business.id})">Submit Review</button>
      <button onclick="viewBusiness(${business.id})">View</button>
    </div>
  `;
}).join("");

document.getElementById("directory").innerHTML = cards;

// This for for the review form 

function addReview(businessId) {
  const input = document.getElementById(`review-input-${businessId}`);
  const ratingSelect = document.getElementById(`rating-${businessId}`);

  const reviewText = input.value.trim();
  const ratingValue = Number(ratingSelect.value);

  if (!reviewText) return;

  const business = businesses.find((b) => b.id === businessId);
  business.reviews.push(`${ratingValue} ⭐ - ${reviewText}`);

  const reviewsList = document.getElementById(`reviews-${businessId}`);
  reviewsList.innerHTML += `<li>${ratingValue} ⭐ - ${reviewText}</li>`;

  input.value = "";
  ratingSelect.value = "5";
}

// This is for viewing the business

function viewBusiness(businessId) {
  const business = businesses.find(b => b.id === businessId);

  const reviewHtml = business.reviews
    .map(review => `<li>${review}</li>`)
    .join("");

  const profile = `
    <div class="profile-page">
      <button onclick="goHome()">⬅ Back</button>

      <h2>${business.name}</h2>
      <img src="${business.image}" class="business-image">

      <p><strong>Rating:</strong> ${business.rating} ⭐</p>
      <p><strong>Location:</strong> ${business.location}</p>
      <p>${business.description}</p>

      <h3>Reviews</h3>
      <ul id="reviews-${business.id}">
        ${reviewHtml}
      </ul>

      <label>Rate:</label>
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

  document.getElementById("directory").innerHTML = profile;
}

function goHome() {
  document.getElementById("directory").innerHTML = cards;
}