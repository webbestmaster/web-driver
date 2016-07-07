#!/usr/bin/env bash

cd ~/Library/Android/sdk/platform-tools/

list=$(./adb devices)

echo $list

for i in $list; do

    echo ${i}

done
