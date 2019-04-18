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

`buildBrowser`: **"ng build"**  *[Builds the browser files (build\browser folder). http-serve or static file server will work]*
`buildServer`: **"ng run ssrang:server"**,  *[Builds ssr (build\server folder)]*
`compileServer`: **"webpack --config webpack.server.config.js --progress --colors"**, *[Compiles server.ts and makes build\server files bootstrap ready]*
`startServer`: **"node dist/server"**, *[runs main.js files (express)]*
`buildAll`: **"npm run buildBrowser && npm run buildServer && npm run compileServer && npm run startServer"** *[Runs all commands together]*
