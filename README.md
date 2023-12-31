<div align="center">


<img src="public/images/monika.png" alt="Banner" style="width: 150px; border-radius: 50%;">


[vankythien.dev](https://vankythien.dev/), an attempt at web dev, and realized I sucks. <br>
Using Next.js 13, enhanced with Tailwind, powered by TypeScript, and seamlessly deployed via Vercel.

[![CodeFactor](https://www.codefactor.io/repository/github/thienguen/website/badge)](https://www.codefactor.io/repository/github/thienguen/website)

</div>


# Preview ☁️

<div align="center">

<img src="public/bg/Preview-website2.gif" alt="Banner" style="height: 350px;">

</div>

## Getting Started 🎲

Set up the environment variables file with the following variables.

```bash
  # https://api.lanyard.rest/v1/users/user_id
  BASE_URL=http://localhost:3000

  NEXT_PUBLIC_DISCORD_ID=
  NEXT_PUBLIC_EMAIL=

  GITHUB_ID=Iv1.
  GITHUB_SECRET=

  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=

  DATABASE_URL=

  NEXTAUTH_URL_INTERNAL=http://10.240.8.16
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=
```

- Get `GITHUB_ID` and `GITHUB_SECRET` from [Github OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

- Get `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from [Google OAuth](https://console.cloud.google.com/apis/credentials)

- GET `NEXTAUTH_SECRET` from [NextAuth](https://next-auth.js.org/getting-started/example)
  - OR runt the command `openssl rand -base64 32` in the CLI
  - OR access to this website [NextAuth](https://generate-secret.vercel.app/32) 

### Next, run in the CLI (root folder) ☢️

```bash
  # install dependencies
  npm install

  # run prisma CLI
  npm prisma run

  # run the development server
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Features ✒️

- [x] Discord Presence
- [x] Google OAuth
- [x] Github OAuth
- [x] Lanyard API
- [x] Guestbook
- [x] Kbar
- [x] useSound
- [x] Blog (TBD)
- [ ] Reponsive (breh)

# Project Folder Structure 💀

Welcome to the project's folder structure! Below is an organized representation of the directories and subdirectories:

```bash
## prisma 
├── 📄 schema.prisma

## public
├── 📂 bg
├── 📂 fonts
├── 📂 icons
├── 📂 icons-json
├── 📂 images
├── 📂 mouse
├── 📂 rpg
└── 📂 sounds

## src code
├── 📁 app
│   ├── 📁 about
│   ├── 📁 api
│   ├── 📁 dashboard
│   ├── 📁 contact
│   ├── 📁 guestbook
│   └── 📁 projects
├── 📁 components
│   ├── 📁 about-me
│   │   └── 📁 qa
│   ├── 📁 common
│   ├── 📁 dashboard
│   │   └── 📁 ...
│   ├── 📁 about-me
│   │   └── 📁 ...
│   ├── 📁 footer
│   │   └── 📁 ...
│   ├── 📁 guestbook
│   │   └── 📁 ...
│   ├── 📁 home
│   │   └── 📁 lanyard
│   ├── 📁 navbar
│   └── 📁 purojekuto
│       ├── 📁 (render)
│       │   ├── 📁 many
│       │   └── 📁 one
│       └── 📁 (timeline)
├── 📁 ui
│   └── 📁 ...
├── 📁 hooks
│   └── 📁 lanyard
└── 📁 lib
    ├── 📁 nextauth
    └── 📁 util

## css
├── 📁 styles
│   ├── 📄 global.css
│   ├── 📄 carousal.css
│   ├── 📄 kbar.css
│   ├── 📄 navbar.css
│   ├── 📄 hi.css
│   ├── 📄 timeline.css
│   └── 📄 activity.css
│   └── 📄 solar.css
│   └── 📄 equalizer.css
```

# Tech Stack

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [PlanetScale](https://planetscale.com/)


# 📈 Statistic

<div align="center">

![Alt](https://repobeats.axiom.co/api/embed/2c807fd151ce226b3643cb0b6036d94a319c2783.svg "Repobeats analytics image")

</div>

# Issues 🧻

The repo currently facing two known bugs from Next.js 

- [ ] [Server run out of memory](https://github.com/vercel/next.js/issues/46756)
- [ ] [Non Post Server Error](https://github.com/vercel/next.js/issues/53882)

# Aight 🐧

- Probably not the only one
- At least I think at some point it was an intended portfolio, until it doens't
- it turns out, aight.

# 📝 License & Forking/Cloning

All code in this repository is licensed under the GNU Affero General Public License v3—see the LICENSE file for more information. Please remove all of my personal information and related stuff. If you want to use this repo. This is source-available. Feels free to do so and give it a star.