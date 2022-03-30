(window as any).CESIUM_BASE_URL = ".";

export function helloTiny() {
    console.log("Hello from tiny");
}

import { initCesium } from "./cesium";
initCesium();