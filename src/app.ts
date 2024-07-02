import { maxUploadFileSize, port } from "./utils/env";
import RexServer, { IRexServer } from "./utils/server";

const server:IRexServer = new RexServer(port,maxUploadFileSize);
server.run();