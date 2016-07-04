#!/usr/bin/env bash

~/Library/Android/sdk/platform-tools/adb shell am start -a android.intent.action.MAIN -n org.openqa.selenium.android.app/.MainActivity

node test-starter

~/Library/Android/sdk/platform-tools/adb shell am force-stop org.openqa.selenium.android.app


