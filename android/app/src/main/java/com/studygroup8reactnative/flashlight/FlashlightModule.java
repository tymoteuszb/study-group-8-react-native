package com.studygroup8reactnative.flashlight;

import android.content.Context;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraManager;
import android.os.Build;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.*;

public class FlashlightModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext myReactContext;

    public FlashlightModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.myReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Flashlight";
    }

    @ReactMethod
    public void switchState(Boolean newState) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            CameraManager cameraManager =
                    (CameraManager) this.myReactContext.getSystemService(Context.CAMERA_SERVICE);

            try {
                String cameraId = cameraManager.getCameraIdList()[0];
                cameraManager.setTorchMode(cameraId, newState);
            } catch (CameraAccessException e) {
                e.printStackTrace();
            }
        }
    }
}
