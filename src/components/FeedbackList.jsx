import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "feedbacks"), orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setFeedbacks(data);
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Submitted Feedbacks</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">No feedbacks available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {feedbacks.map((fb, index) => (
            <div key={index} className="p-4 border rounded shadow-sm bg-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{fb.name}</h3>
                <span className="text-sm text-gray-500">
                  {fb.timestamp?.toDate?.().toLocaleString?.() || "No timestamp"}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Email:</span> {fb.email}
              </p>
              <p className="text-sm text-gray-700">{fb.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
