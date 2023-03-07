import firebase_db from "../firebase";

const db = firebase_db.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(tutorial) {
    console.log("create: " + tutorial.title);
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();