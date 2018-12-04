# PBX Wallboard
PBX Wallboard is a desktop app that displays call statistics for your Axeos PBX. The app relies on <a href="https://electronjs.org/">Electron</a>, a framework for developing cross-platform native applications with JavaScript, HTML, and CSS.

<p><img src="/screenshots/screenshot.png"></p>

## Configuration
Enter your PBX Address and API key in /src/js/script.js

## Build instructions
The <a href="https://www.electron.build">electron-builder</a> library is used for packaging and building ready-for-distribution Electron app for macOS, Windows and Linux. To build the app for cross-platform distribution use e.g. <code>electron-builder -mwl</code> (<b>M</b>ac <b>W</b>indows <b>L</b>inux). 

You can also run e.g. <code>yarn dist dmg</code> or <code>npm run dist -- --mac --win</code> commands.

For an app that will be shipped to production, you should sign your application. See <a href="https://www.electron.build/code-signing#where-to-buy-code-signing-certificate">where to buy code signing certificates</a>.

## PBX documentation
PBX API documentation on ACD stats: <a href="https://axeos.com/knowledgebase/pbx-api/#ACD_Statistics">Axeos knowledge base</a>.

## Disclaimer
This is not an official <a href="https://axeos.com">Axeos</a> product. It's not released by Axeos and it's not supported by Axeos. 

## Issues
If you encounter an issue which is related to the code you can <a href="https://github.com/olku/../issues/new">open an issue</a> or choose to fix it yourself. <p>Learn from the code, build an app from it, develop new features. Please share your code via a pull request when you do.</p>