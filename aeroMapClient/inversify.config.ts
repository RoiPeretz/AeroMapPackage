import { Container } from "inversify";
import { Dependency } from "./src/dependency"

const clientContainer = new Container();
clientContainer.bind<Dependency>(Dependency).toSelf();
export { clientContainer  };