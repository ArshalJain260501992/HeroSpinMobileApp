# HeroSpinMobileApp
Sometimes, having too many options can be overwhelming. We’ve all been there. Restaurants with long menus, a piece of clothing in many different colors, and of course, a quiet evening in front of the TV, not knowing what to watch. Especially with the last one, sometimes it would be great if someone could make that call for us. And since most of us, are also playing with our phone, while in front of the TV (if not also controlling the TV), what could be better than an app, that randomly picks a show for you. Because we are geeks, and we love superheroes, our app is going to be picking random superhero movies. If you really feel like you want to take the situation in your hands, you can select your hero.

## Features
It is a hybrid app that can be used on iOS and android.
* It has 3 screens or tabs - to pick a random movie, to pick a random movie  of a super-hero / character, browse all super hero movies.
* Additionally there are 2 pop-over modals which displays the detailed information of the movie or the character picked.
* The application is user-friendly and very fast.

## Limitations
* The API sources used for characters and movies are discrete; so there will be scenarios where a movie could not be found for a character.
## Getting Started

To successfully get this project up and running one has to clone the repository which has UI project. The application is build using ionic 5.2 framework, Apache cordova 9.0 with Angular 7.3.

### Prerequisites
* [Node Js](https://nodejs.org/en/) - The package manager
* [Ionic 5.2](https://ionicframework.com/) - The open-source SDK for hybrid mobile app development 
* [Apache Cordova 9.0](https://cordova.apache.org/) -Mobile application development framework.
* [Angular 7 or above](https://angular.io/guide/quickstart) - The web framework used

### Application deployment

#### UI side
* Install node js latest version for NPM.
* Install latest angular
  > npm install -g @angular cli
* Install latest ionic
  > npm install -g ionic
* install latest cordova
  >ionic install -g cordova
* Move to UI project's home directory
* Install all the dependencies required for the project
  > npm install
  > npm install --save-dev @ionic/lab (ionic-lab for development)
  > ng add @angular/material (to add angular material)
* Start the application 
  > ionic serve -l (to run in lab mode, application starts at localhost:8200)
  > ionic serve (application starts at localhost:8100) 

### Publishing the app
First you need to download the Android SDK. Follow the below steps:
Set up the Android development environment
Before you can build Android applications, you must install the Android SDK. Installing the Android SDK also installs the AVD Manager, a graphical user interface for creating and managing Android Virtual Devices (AVDs).

From the [Android web site](https://developer.android.com/studio), download the correct version of the Android SDK for your operating system.

Unzip the archive to a location of your choosing. For example, on Linux or Mac, you can place it in the root of your user directory. See the Android Developers web site for additional installation details.

Configure the ANDROID_HOME environment variable based on the location of the Android SDK. Additionally, consider adding  ANDROID_HOME/tools, and ANDROID_HOME/platform-tools to your PATH.

### Mac OS X
 > export ANDROID_HOME=/<installation location>/android-sdk-macosx
 > export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
### Linux
 > export ANDROID_HOME=/<installation location>/android-sdk-linux
 > export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
### Windows
 > set ANDROID_HOME=C:\<installation location>\android-sdk-windows
 > set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
 
The Android SDK download does not include specific Android platforms. To run the code in this guide, you need to download and install the latest SDK platform. You do this by using the Android SDK and AVD Manager that you installed in the previous section.

Open the Android SDK Manager window:

android
 > Note: If this command does not open the Android SDK Manager, then your path is not configured correctly.

Select the Tools checkbox.
Select the checkbox for the latest Android SDK.
From the Extras folder, select the checkbox for the Android Support Library.
Click the Install packages... button to complete the download and installation.
Note: You may want to install all the available updates, but be aware it will take longer, as each API level is a large download.

Once the installation is complete, please follow all steps mentioned in [Ionic framework docs](https://ionicframework.com/docs/v1/guide/publishing.html)
## Authors

* **Arshal jain** - [GitHub](https://github.com/ArshalJain260501992)

