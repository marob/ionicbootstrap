A Yeoman-ized ionicframework Bootstrap inspired by [ionic-angular-cordova-seed](https://github.com/driftyco/ionic-angular-cordova-seed)

## Prerequisites

   * node.js
   * cordova CLI

## Start

Clone the repo:

```sh
git clone https://github.com/marob/ionicbootstrap ionicbootstrap
```

Initialize:

```sh
# In the ionicbootstrap folder
npm install
bower install
```

## Run in the browser

```sh
grunt server
```

## Add a platform

```sh
cordova platform add [platform]
```

## Emulate on a platform

```sh
# To generate the application
grunt
# To emulate the generated application
cordova emulate [platform]
```

## Run on a platform

```sh
# To generate the application
grunt
# To emulate the generated application
cordova run [platform]
```