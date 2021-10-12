import DIContainer, { IDIContainer, object } from "rsdi";
import { controllers } from "./controllers";
import { repositories } from "./repositories";
import { AppLogger } from "../../lib/Logger";

export default function configureDI(): IDIContainer {
  const container = new DIContainer();
  container.add({
    [AppLogger.name]: object(AppLogger),
    ...controllers,
    ...repositories
  })
  return container;
}