@echo off
chcp 65001
cd %~dp0
cd ../
npm install -g hap-toolkit
npm install
npm run build
npm run server