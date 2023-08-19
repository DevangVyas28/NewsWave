import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const likedNews = async (userId, title, imgUrl, description, url) => {
  try {
    await addDoc(collection(db, "liked-news"), {
      user: userId,
      title: title,
      imgUrl: imgUrl,
      description: description,
      url: url,
      createdAt: new Date().getTime(),
    });
    alert("Added to Liked Articles");
  } catch (err) {
    alert(err);
  }
};

export { likedNews };
