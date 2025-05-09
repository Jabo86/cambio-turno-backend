const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Dati iniziali in memoria
const initialData = {
  richieste: [],
  notifiche: []
};

// Crea un router con dati in memoria
const router = jsonServer.router(initialData);

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});