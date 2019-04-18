# Ssrang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

`npm run start`
*ng serve*

Runs at http://localhost:4200/ (or run `ng serve --port 5000` to change default port)

----------------------------------------------------
`npm run compile:server`
*webpack --config webpack.server.config.js --progress --colors*
-- Only **compiles** the **server.ts** changes (Along with latest angular changes)

----------------------------------------------------
`npm run serve:ssr` 
*node dist/server*
-- Only runs the **build files** in build/server files
Runs at http://localhost:4000/ (As configured in the server.ts file)

----------------------------------------------------
