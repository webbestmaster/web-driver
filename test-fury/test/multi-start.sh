#!/usr/bin/env bash

unamestr=`uname`
#adbPath="$reportsFolder/lcov-report/index.html"
if [[ "$unamestr" == 'Darwin' ]]; then # detect MacOS
   adbPath=~/Library/Android/sdk/platform-tools/
elif [[ "$unamestr" == 'Linux' ]]; then # detect Linux
   adbPath=~/Android/Sdk/platform-tools/
fi

cd $adbPath

./adb forward --remove-all

./adb devices

array='2316a994 014E1E291901300D 4df1f33c5a199f87'
#array='2316a994 4df1f33c5a199f87'
#array='09eef7df'

function runTest {

    deviceId=$1
    devicePort=808$2

    # bind devices by ports
    ./adb -s $deviceId forward tcp:$devicePort tcp:8080

    # install webDriver apk
#    ./adb -s $deviceId install -r ~/master-git/web-driver/tools/android-server-2.21.0.apk

    # install webDriver apk into emulator, this way is not tested
#    ./adb -s $deviceId -e install -r ~/master-git/web-driver/tools/android-server-2.21.0.apk

#    ./adb -s $deviceId shell input keyevent 26 #Pressing the lock button

#    ./adb -s $deviceId shell input touchscreen swipe 930 880 930 380 #Swipe UP

    ./adb -s $deviceId shell pm clear org.openqa.selenium.android.app

    ./adb -s $deviceId shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity

    node ~/master-git/web-driver/test-fury/test/test-starter $devicePort

    ./adb -s $deviceId shell am force-stop org.openqa.selenium.android.app

#    ./adb -s $deviceId shell am kill org.openqa.selenium.android.app

#    ./adb -s $deviceId shell am kill-all

    ./adb -s $deviceId shell pm clear org.openqa.selenium.android.app

}

index=0

for i in $array; do

    runTest ${i} $index &

    ((index++))

done

sleep 3

#    ./adb "-s ${10#array[i]} forward tcp:808{i} tcp:8080"
#        su $login -c "scp $httpd_conf_new ${i}:${httpd_conf_path}"
#        su $login -c "ssh $i sudo /usr/local/apache/bin/apachectl graceful"

#exit 0;


#~/Android/Sdk/platform-tools/adb shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity
#
#node test-starter
#
#~/Android/Sdk/platform-tools/adb shell am force-stop org.openqa.selenium.android.app


