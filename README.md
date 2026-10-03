# InterviewIQ.AI

An AI-powered mock interview platform. Users log in with Google, upload a resume (optional), and take a voice interview with an AI interviewer. At the end, they get a scored performance report.

---

## Features

- Google login (Firebase + JWT)
- Resume upload & parsing (PDF → structured data)
- AI-generated interview questions (easy → hard)
- Voice interview — AI speaks, you answer by voice or text
- Per-question timer with auto-submit
- AI scoring: Confidence, Communication, Correctness
- Performance report with charts + PDF download
- Interview history
- Credit system with Razorpay payments

---

## Tech Stack

**Frontend:** React 19, Vite, Tailwind, Redux Toolkit, React Router, Framer Motion

**Backend:** Node.js, Express 5, MongoDB + Mongoose

**Auth:** Firebase Google Sign-In + JWT (httpOnly cookie)

**AI:** OpenRouter → `gpt-4o-mini`

**Voice:** Browser Web Speech API (speech-to-text + text-to-speech)

**Payments:** Razorpay

**Resume parsing:** Multer + `pdfjs-dist`

**Reports:** Recharts, `react-circular-progressbar`, `jsPDF`

---

## How It Works

1. **Login** — Google Sign-In → backend issues a JWT cookie. New users get 100 credits.
2. **Setup** — Enter role, experience, mode. Optionally upload a resume — AI extracts your details.
3. **Start interview** — Costs 50 credits. AI generates 5 questions (easy → hard).
4. **Answer** — AI reads each question aloud, you answer by voice or text, with a countdown timer.
5. **Scoring** — Each answer is scored 0–10 on three metrics, with short feedback.
6. **Report** — Final dashboard with charts, advice, and a PDF download.
7. **Credits** — Buy more via Razorpay when you run low.

---

## Database

| Collection | Stores |
|---|---|
| `User` | name, email, credits |
| `Interview` | role, questions, answers, scores, final score, status |
| `Payment` | plan, amount, credits, Razorpay IDs, status |

---

## API Routes

| Route | Purpose |
|---|---|
| `POST /api/auth/google` | Login |
| `GET /api/auth/logout` | Logout |
| `GET /api/user/current-user` | Restore session |
| `POST /api/interview/resume` | Upload & parse resume |
| `POST /api/interview/generate-questions` | Start interview |
| `POST /api/interview/submit-answer` | Submit & score an answer |
| `POST /api/interview/finish` | Finish interview, compute score |
| `GET /api/interview/get-interview` | List past interviews |
| `GET /api/interview/report/:id` | Get one report |
| `POST /api/payment/order` | Create Razorpay order |
| `POST /api/payment/verify` | Verify payment, add credits |

All routes (except login/logout) require a valid JWT cookie.

---

## Getting Started

```bash
git clone https://github.com/samruddhichougule570/interviewIQ.git
cd interviewIQ

cd server && npm install
cd ../client && npm install
```

Create a `.env` in `server/` (see below), then run both:

```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
cd client && npm run dev
```

---

## Environment Variables

`server/.env`:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173

OPENROUTER_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

## Author

**Samruddhi Dilip Chougule** — Full Stack MERN Developer
