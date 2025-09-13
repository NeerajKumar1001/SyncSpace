# SyncSpace

> **Video call + Collaborative Code Editor** — all in one platform

SyncSpace is a web application that allows users to video call and collaborate on coding in real-time. Perfect for pair programming, online interviews, remote team collaboration, or study sessions.

---

## 🚀 Features
- Real-time collaborative code editor (multiple users can edit the same file together)  
- Integrated video calling (peer-to-peer)  
- Shared workspace: video + code editor side by side  
- Syntax highlighting and smooth editor experience  
- Create or join rooms via link for quick collaboration  
- Responsive UI for desktop and mobile  

---

## 🛠 Tech Stack
- **Framework**: Next.js (React + TypeScript)  
- **Styling**: Tailwind CSS  
- **Real-time Collaboration**: WebRTC + WebSockets (Convex for backend)  
- **Authentication**: Clerk  
- **Icons & UI**: Shadcn/ui + Lucide React  
- **Deployment**: Vercel  

---

## 📦 Getting Started

### Prerequisites
- Node.js (>= 18)  
- npm or yarn  
- Clerk account (for authentication keys)  
- Convex account (for backend setup)

### Installation
```bash
# Clone the repository
git clone https://github.com/NeerajKumar1001/SyncSpace.git

cd SyncSpace

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

---

🌐 Deployment

Push your repo to GitHub.

Link the repository to Vercel.

Add environment variables in Vercel dashboard (Clerk + Convex keys).

Deploy — your app will be live on a Vercel domain.

---

```bash
📂 Folder Structure

SyncSpace/
├── public/             # static assets
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # UI components
│   ├── hooks/          # custom React hooks
│   ├── lib/            # utilities
│   └── styles/         # global styles
├── package.json
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```
---

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a branch (feature/your-feature or fix/issue)

Commit your changes

---

Push and open a Pull Request

📜 License

MIT License © 2025 Neeraj Kumar

---
