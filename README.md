# Feedback Collector 📝

A simple feedback collection app built using **React**, **Tailwind CSS**, and **Firebase**. Users can submit their feedback, which is stored in Firestore. Admin can toggle themes and view all feedbacks.

---

## 🔧 Tech Stack

- React (Vite)
- Tailwind CSS
- Firebase Firestore
- Netlify (for deployment)

---

## 📁 Project Structure

/ ├── components/ │ ├── FeedbackForm.jsx │ ├── FeedbackList.jsx │ └── ToggleButton.jsx ├── pages/ │ └── Home.jsx ├── firebase.js ├── App.jsx ├── main.jsx ├── .env ├── index.css └──

## 🚀 Deployment Steps

1. Clone the repo  
2. Run `npm install`  
3. Create a `.env` file and paste your Firebase credentials (as shown in firebase.js)  
4. Run `npm run dev` to start locally  
5. Deploy using Netlify (Connect GitHub repo)

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
