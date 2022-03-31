import "reflect-metadata";
import { Dependency } from './dependency';
import { clientContainer } from "../inversify.config"
import { helloAeroMap } from 'aero-map';
import '../node_modules/aero-map/dist/index.css'
import './index.css'

console.log("Hello from aero-map client");
helloAeroMap();

var d = clientContainer.get<Dependency>(Dependency);
d.bla();