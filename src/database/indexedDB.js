import { openDB } from 'idb'; // Using the 'idb' library for simpler promises

const DATABASE_NAME = 'Wagoora_VER_DB';
const STORE_NAME = 'pending_surveys';

/**
 * Initializes the local database for Wagoora Village Education Register
 */
export const initDB = async () => {
  return openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      // Create a store for households that haven't been synced to the server yet
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
        // Index by Head of Family for easy local searching
        store.createIndex('headName', 'headName', { unique: false });
      }
    },
  });
};

/**
 * Saves a survey locally when there is no internet in the ward
 */
export const saveSurveyLocally = async (surveyData) => {
  const db = await initDB();
  return db.add(STORE_NAME, {
    ...surveyData,
    timestamp: new Date().toISOString(),
    synced: false
  });
};

/**
 * Retrieves all surveys waiting to be sent to the HOI Dashboard
 */
export const getPendingSurveys = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

/**
 * Deletes a survey from local storage once sync is successful
 */
export const deleteSyncedSurvey = async (id) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};

