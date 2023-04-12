# Tigris Data + Remix

TKTK

## Local Dev

Clone the repo and install deps.

Create a `.env` with your Tigris project details:

```text
TIGRIS_URI=api.preview.tigrisdata.cloud
TIGRIS_PROJECT=
TIGRIS_CLIENT_ID=
TIGRIS_CLIENT_SECRET=
TIGRIS_DB_BRANCH=main
```

```shell
npx ts-node db/setup.ts
npx ts-node db/seed.ts # only if you don’t have data

npm run dev
```