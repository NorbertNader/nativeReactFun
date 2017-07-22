# nativeReactFun
![screen of infinity illutions login page](https://github.com/NorbertNader/nativeReactFun/blob/master/media/screen.png)

an app for numerology report portal http://infinityillusions.us/

this will be exciting!

sooo, lets run the emulator shall we...

lets see what we have here...

`emulator -list-avds`

ok lets try this one...

`cd $ANDROID_HOME/tools && emulator -avd Nexus_6_API_25`

delicious.

***

in the directry run

`react-native start`

and then be it iOS 

`react-native run-ios`

or android 

`react-native run-android`

***

Very annoying when doing apk release...

before running

`./gradlew assembleRelease`

remember to 

`unlink node_modules/react-native/third-party/glog-0.3.4/test-driver`
