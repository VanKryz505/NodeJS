Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

#Configura de forma automatica y con valores por default los valores del archivo package.json
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp> npm init --yes
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Wrote to C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\package.json:

{
  "name": "freecodecamp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp> cd express
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm init --yes
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
Wrote to C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express\package.json:

{
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

#Instalando packete express
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm install express
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 57 packages, and audited 58 packages in 16s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm uninstall spress
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

up to date, audited 58 packages in 2s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

#Desisntalando paquetes
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm uninstall express
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

removed 57 packages, and audited 1 package in 2s

found 0 vulnerabilities
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm install express@4.15.1
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 46 packages, and audited 47 packages in 11s

7 vulnerabilities (1 low, 2 moderate, 4 high)

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm uninstall express
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

removed 46 packages, and audited 1 package in 2s

found 0 vulnerabilities
#instalando packetes especificos
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express> npm install express --save-dev
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 57 packages, and audited 58 packages in 8s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\VanKryz\git\NodeJS\FreeCodeCamp\express>