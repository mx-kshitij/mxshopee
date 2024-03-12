/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    "ios.debug": {
      type: "ios.app",
      binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/MxShopeeDev.app",
      build: "xcodebuild ARCHS=x86_64 -workspace ios/NativeTemplate.xcworkspace -scheme Dev -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build"
    },
    "ios.release": {
      type: "ios.app",
      binaryPath: "ios/build/Build/Products/Release-iphonesimulator/MxShopee.app",
      build: "xcodebuild ARCHS=x86_64 -workspace ios/NativeTemplate.xcworkspace -scheme nativeTemplate -configuration Release -sdk iphonesimulator -derivedDataPath ios/build"
    },
    "android.debug": {
      type: "android.apk",
      build: "cd android && gradlew assembleDevDebug assembleAndroidTest -DtestBuildType=debug",
      binaryPath: "android/app/build/outputs/apk/dev/debug/app-dev-debug.apk",
      testBinaryPath: "android/app/build/outputs/apk/androidTest/dev/debug/app-dev-debug-androidTest.apk"
    },
    "android.appstore": {
      type: "android.apk",
      build: "cd android && gradlew assembleAppstoreDebug assembleAndroidTest -DtestBuildType=debug",
      binaryPath: "android/app/build/outputs/apk/appstore/debug/app-appstore-debug.apk",
      testBinaryPath: "android/app/build/outputs/apk/androidTest/appstore/debug/app-appstore-debug-androidTest.apk"
    }
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 15 Pro"
      }
    },
    android: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_5_API_29_2"
      }
    }
  },
  configurations: {
    "ios.debug": {
      device: "simulator",
      app: "ios.debug"
    },
    "ios.release": {
      device: "simulator",
      app: "ios.release"
    },
    "android.appstore": {
      device: "android",
      app: "android.appstore"
    },
    "android.debug": {
      device: "android",
      app: "android.debug"
    }
  }
};
