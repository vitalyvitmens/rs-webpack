# Webpack

- За последние годы разработка клиентской части приложений сильно преобразилась. Если раньше нам приходилось подключать множество библиотек и скриптов вручную, то теперь в этом может помочь сборщик (bundler). Одной из его важнейших задач является сборка всех скриптов в один или несколько файлов, которые называют «bundle».

- Webpack — это сборщик статических модулей для современных JavaScript-приложений. Он создан в первую очередь для JavaScript, но так же может работать с другими типами файлов, такими как HTML, CSS, изображения и т. д. Когда Webpack обрабатывает приложение, он строит граф зависимостей из одной или нескольких точек входа (entry points), а затем объединяет каждый модуль, необходимый для проекта, в один или несколько «bundle».

- Официальный сайт — webpack.js.org

- Первый релиз — 10.03.2012г.

- Webpack помогает решать проблемы вечного подключения библиотек и скриптов к HTML: в каком порядке их подключать, как решать конфликты и т. д. Также при необходимости с его помощью (а также с помощью дополнительных инструментов) можно делать некоторые преобразования с файлами (перевод Sass в CSS, новый стандарт JavaScript в старый, минификация кода и т. д.), удобно вести разработку с помощью локального сервера, source maps и многого другого.

- npm init | npm init -y

- package name: (rs-nature)
- version: (1.0.0)
- description: application that reproduces the sounds of nature
- entry point: (index.js)
- test command:
- git repository:
- keywords: webpack, js
- author: vitalyvitmens
- license: (ISC)
- Is this OK? (yes) yes

- npm install webpack webpack-cli --save-dev
- npm install --save-dev html-webpack-plugin
- npm install copy-webpack-plugin --save-dev
- npm i webpack-merge --save-dev

- создаём 3 конфигурационных файла в корне проекта, в которых будем настраивать Webpack:
  - webpack.config.common.js:

    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const CopyPlugin = require('copy-webpack-plugin')

    module.exports = {
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html'),
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'public/favicon.png'),
              to: path.resolve(__dirname, 'dist'),
            },
          ],
        }),
      ],
    }

    - webpack.config.dev.js:

      const { merge } = require('webpack-merge')
      const commonConfig = require('./webpack.config.common')

      module.exports = merge(commonConfig, {
        mode: 'development',
        devtool: 'inline-source-map',
      })

    - webpack.config.prod.js:

      const { merge } = require('webpack-merge')
      const commonConfig = require('./webpack.config.common')

      module.exports = merge(commonConfig, {
        mode: 'production',
        devtool: 'source-map',
      })

- создаём папку src в которую помещаем файлы: index.js и data.js
- в файле data.js меняем const data = на export default
- в файл index.js добавляем импорт: import data from './data'
- в package.json вносим изменения:
  - меняем строку "main": "index.js" на "private": true
  - в "scripts" меняем строку "test" на строки:
    - "start": "npx webpack --mode development",
    - "build": "npx webpack --mode production"
- в корне проекта создаем папку public и перекидываем в нее файлы из корня проекта: index.html & favicon.png
- добавляем строку в файл public/index.html перед title: <link rel="shoutcut icon" href="favicon.png" />
- теперь можем запустить вебпак:
  - npm run start
- после выполнения команды npm run start в папке dist обнаружим файлы index.html (запускаем его при помощи: Open with Live Server) & main.[contenthash].js

### https://webpack.js.org/configuration/output/#outputfilename

### https://webpack.js.org/plugins/html-webpack-plugin/

### https://webpack.js.org/plugins/copy-webpack-plugin/

- npm install --save-dev css-loader
- npm install --save-dev style-loader
- npm install --save-dev mini-css-extract-plugin
- npm install css-minimizer-webpack-plugin --save-dev
- npm install terser-webpack-plugin --save-dev

#### https://fonts.google.com/specimen/Roboto

- npm install sass-loader sass webpack --save-dev
- npm install --save-dev postcss-loader postcss
- npm i postcss-preset-env --save-dev
- npm install webpack-dev-server --save-dev
- npm install --save-dev typescript ts-loader
- npm i react react-dom
- npm i @types/react @types/react-dom

#### https://webpack.js.org/plugins/split-chunks-plugin/#root

#### https://www.npmjs.com/package/webpack-bundle-analyzer

- npm i webpack-bundle-analyzer --save-dev
- npx webpack --json > stats.json
