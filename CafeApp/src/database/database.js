import * as SQLite from 'expo-sqlite';

let databasePromise;

function getDatabase() {
  if (!databasePromise) {
    databasePromise = SQLite.openDatabaseAsync('cafe-review.db');
  }

  return databasePromise;
}

export async function initDatabase() {
  const db = await getDatabase();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      cafe_name TEXT NOT NULL,
      sweetness_level TEXT NOT NULL,
      rating INTEGER NOT NULL,
      notes TEXT,
      favorite INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);
}

export async function registerUser({ fullName, username, password }) {
  const db = await getDatabase();

  return db.runAsync(
    `
      INSERT INTO users (full_name, username, password)
      VALUES (?, ?, ?)
    `,
    [fullName, username, password]
  );
}

export async function findUserByUsername(username) {
  const db = await getDatabase();

  return db.getFirstAsync(
    `
      SELECT id, full_name AS fullName, username, password
      FROM users
      WHERE username = ?
    `,
    [username]
  );
}

export async function findUserByCredentials(username, password) {
  const db = await getDatabase();

  return db.getFirstAsync(
    `
      SELECT id, full_name AS fullName, username
      FROM users
      WHERE username = ? AND password = ?
    `,
    [username, password]
  );
}

export async function createReview(userId, review) {
  const db = await getDatabase();

  return db.runAsync(
    `
      INSERT INTO reviews (user_id, cafe_name, sweetness_level, rating, notes, favorite)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      userId,
      review.cafeName,
      review.sweetnessLevel,
      review.rating,
      review.notes,
      review.favorite,
    ]
  );
}

export async function getReviewsByUserId(userId) {
  const db = await getDatabase();

  return db.getAllAsync(
    `
      SELECT
        id,
        user_id AS userId,
        cafe_name AS cafeName,
        sweetness_level AS sweetnessLevel,
        rating,
        notes,
        favorite,
        created_at AS createdAt
      FROM reviews
      WHERE user_id = ?
      ORDER BY favorite DESC, created_at DESC, id DESC
    `,
    [userId]
  );
}

export async function updateReviewById(reviewId, review) {
  const db = await getDatabase();

  return db.runAsync(
    `
      UPDATE reviews
      SET cafe_name = ?, sweetness_level = ?, rating = ?, notes = ?, favorite = ?
      WHERE id = ?
    `,
    [
      review.cafeName,
      review.sweetnessLevel,
      review.rating,
      review.notes,
      review.favorite,
      reviewId,
    ]
  );
}

export async function deleteReviewById(reviewId) {
  const db = await getDatabase();

  return db.runAsync(
    `
      DELETE FROM reviews
      WHERE id = ?
    `,
    [reviewId]
  );
}
