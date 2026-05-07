const USERS_KEY = 'cafe-review-users';
const REVIEWS_KEY = 'cafe-review-reviews';

function getStorageItem(key) {
  if (typeof localStorage === 'undefined') {
    return [];
  }

  const rawValue = localStorage.getItem(key);
  return rawValue ? JSON.parse(rawValue) : [];
}

function setStorageItem(key, value) {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
}

function nextId(items) {
  if (!items.length) {
    return 1;
  }

  return Math.max(...items.map((item) => item.id)) + 1;
}

export async function initDatabase() {
  if (typeof localStorage === 'undefined') {
    return;
  }

  if (!localStorage.getItem(USERS_KEY)) {
    setStorageItem(USERS_KEY, []);
  }

  if (!localStorage.getItem(REVIEWS_KEY)) {
    setStorageItem(REVIEWS_KEY, []);
  }
}

export async function registerUser({ fullName, username, password }) {
  const users = getStorageItem(USERS_KEY);
  const newUser = {
    id: nextId(users),
    fullName,
    username,
    password,
  };

  setStorageItem(USERS_KEY, [...users, newUser]);
  return newUser;
}

export async function findUserByUsername(username) {
  const users = getStorageItem(USERS_KEY);
  return users.find((user) => user.username === username) || null;
}

export async function findUserByCredentials(username, password) {
  const users = getStorageItem(USERS_KEY);
  const user = users.find(
    (candidate) => candidate.username === username && candidate.password === password
  );

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    fullName: user.fullName,
    username: user.username,
  };
}

export async function createReview(userId, review) {
  const reviews = getStorageItem(REVIEWS_KEY);
  const newReview = {
    id: nextId(reviews),
    userId,
    cafeName: review.cafeName,
    sweetnessLevel: review.sweetnessLevel,
    rating: review.rating,
    notes: review.notes,
    favorite: review.favorite,
    createdAt: new Date().toISOString(),
  };

  setStorageItem(REVIEWS_KEY, [...reviews, newReview]);
  return newReview;
}

export async function getReviewsByUserId(userId) {
  const reviews = getStorageItem(REVIEWS_KEY);

  return reviews
    .filter((review) => review.userId === userId)
    .sort((a, b) => {
      if (Number(a.favorite) !== Number(b.favorite)) {
        return Number(b.favorite) - Number(a.favorite);
      }

      return b.id - a.id;
    });
}

export async function updateReviewById(reviewId, review) {
  const reviews = getStorageItem(REVIEWS_KEY);
  const nextReviews = reviews.map((currentReview) =>
    currentReview.id === reviewId
      ? {
          ...currentReview,
          cafeName: review.cafeName,
          sweetnessLevel: review.sweetnessLevel,
          rating: review.rating,
          notes: review.notes,
          favorite: review.favorite,
        }
      : currentReview
  );

  setStorageItem(REVIEWS_KEY, nextReviews);
}

export async function deleteReviewById(reviewId) {
  const reviews = getStorageItem(REVIEWS_KEY);
  setStorageItem(
    REVIEWS_KEY,
    reviews.filter((review) => review.id !== reviewId)
  );
}
