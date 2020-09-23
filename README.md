# mgauge

A mobile application for mgauge, it uses corodova and angular js. this is wrapper to convert existing ANgular application from mobile web to mobile app.

Download this code and execute below commands :

ng build --prod --aot
cordova build android

once APK build is complete start emulator with bellow command :

cordova emulate android

you can sign and upload it to playstore using :

cordova build --release android

don't forget to signin you app with certs before release !!!!!


*Code is placed in Dev branch
