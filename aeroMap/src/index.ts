import "reflect-metadata";
import { myContainer } from "../inversify.config";
import { initCesium } from "./cesium";
import { IMyClass } from "./DI/IMyClass";
import { TYPES } from "./DI/TYPES";

(window as any).CESIUM_BASE_URL = ".";

export function helloAeroMap() {
    console.log("Hello from aeroMap");
}

initCesium();

var myClasss = myContainer.get<IMyClass>(TYPES.IMyClass);
myClasss.doWork();