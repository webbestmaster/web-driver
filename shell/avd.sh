#!/usr/bin/env bash

pathPlatformTools="${HOME}/Android/Sdk/platform-tools/"
pathTools="${HOME}/Android/Sdk/tools/"

cd $pathTools

emulatorList=$(./emulator -list-avds)

echo "$emulatorList"

array=(${emulatorList//\n/ })

echo "${emulatorList[0]}"


#echo "$(./emulator -list-avds)"
#
#for VARIABLE in "$(./emulator -list-avds)"
#do
#    echo $VARIABLE
#
#done




#
#adb kill-server
#
#adb start-server






