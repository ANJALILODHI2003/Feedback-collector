import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSuccess("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "feedbacks"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      setSuccess("✅ Feedback submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSuccess("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 border rounded shadow space-y-4 bg-white"
    >
      <h2 className="text-2xl font-bold text-center">Submit Feedback</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded  px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Your Feedback"
        className="w-full p-2 border rounded h-24"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

<button
  type="submit"
  className={`w-full py-2 px-4 rounded text-white ${
    loading ? "bg-blue-400" : "bg-black hover:bg-gray-800"
  }`}
  abled={loading}
>
  {loading ? "Submitting..." : "Submit Feedback"}
</button>


      {success && (
        <p className="text-center text-sm mt-2 text-green-600">{success}</p>
      )}
    </form>
  );
}
