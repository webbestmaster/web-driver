#!/usr/bin/env bash


#~/Library/Android/sdk/platform-tools/adb shell input keyevent 26 #Pressing the lock button
#~/Library/Android/sdk/platform-tools/adb shell input touchscreen swipe 930 880 930 380 #Swipe UP

~/Library/Android/sdk/platform-tools/adb forward --remove-all

~/Library/Android/sdk/platform-tools/adb forward tcp:8080 tcp:8080



#~/Library/Android/sdk/platform-tools/adb install -r ~/master-git/web-driver/tools-external/android-server-2.21.0.apk

~/Library/Android/sdk/platform-tools/adb shell pm clear org.openqa.selenium.android.app

~/Library/Android/sdk/platform-tools/adb shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity

node test-starter

#~/Library/Android/sdk/platform-tools/adb shell am force-stop org.openqa.selenium.android.app


