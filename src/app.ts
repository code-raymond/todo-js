import TodoServer, { IServer } from "./server";

const server:IServer = new TodoServer();

server.run();