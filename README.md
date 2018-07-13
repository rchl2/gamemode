# Los Santos Online Gamemode

Los Santos Online is a GTA V Roleplay server based on RAGE Multiplayer.
This repository contains source files of server gamemode.

**This gamemode is currently in development state, you shouldn't run it on production server.**

## Requirements

1.  SQL Server, preferred MariaDB
2.  Node.js installed on machine

## Server setup

First of all, you should download all of necessary dependencies. Run command described below to download them.

```bash
# With npm
npm install

# With Yarn
yarn install
```

## Building client files

- `npm run hot`: runs `webpack-dev-server` with hot reload. Open `localhost:8080/dist/[view_name]/` to access

- `npm run dev`: builds files for once with development mode

- `npm run production`: will clear `dist/` as well `src/` :exclamation: directories & build files with minification
