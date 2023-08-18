import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const likedNews = async (userId, title, imgUrl, description, url) => {
  alert(userId);
  try {
    await addDoc(collection(db, "liked-news"), {
      user: userId,
      title: title,
      imgUrl: imgUrl,
      description: description,
      url: url,
      createdAt: new Date().getTime(),
    });
  } catch (err) {
    alert(err);
  }
};

export { likedNews };
