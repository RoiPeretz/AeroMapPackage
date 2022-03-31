import { injectable } from "inversify";

@injectable()
export class Dependency {
    bla(){
        console.log("dependency");
    }
} 