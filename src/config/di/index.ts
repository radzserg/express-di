import DIContainer, { IDIContainer, object } from "rsdi";
import { controllers } from "./controllers";

export default function configureDI(): IDIContainer {
  const container = new DIContainer();
  container.add({
    ...controllers
  })
  return container;
}