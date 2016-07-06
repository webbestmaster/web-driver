#!/usr/bin/env bash

cd ~/Android/Sdk/platform-tools/

sleep 3

./adb forward --remove-all

array='2316a994 4df1f33c5a199f87'
#array='09eef7df'

function runTest {

    # bind devices by ports
    ./adb -s $1 forward tcp:808$2 tcp:8080

    # install webDriver apk
    #./adb -s ${i} -e install -r ~/master-git/web-driver/tools/android-server-2.21.0.apk

    ./adb -s $1 shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity

    node ~/master-git/web-driver/test-fury/test/test-starter 808$2

    ./adb -s $1 shell am force-stop org.openqa.selenium.android.app

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


