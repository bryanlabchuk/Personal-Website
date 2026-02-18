# Personal Website

Portfolio site for Bryan Labchuk — Cyber Security.

## Tech

- Next.js 16
- Tailwind CSS
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Contact form

Messages are sent to the address in `CONTACT_EMAIL`; it is never exposed to the frontend. Uses [Resend](https://resend.com) to deliver mail.

1. Copy `.env.example` to `.env.local`
2. Set `CONTACT_EMAIL` to your inbox
3. Create a Resend account, get an API key, add to `RESEND_API_KEY`
