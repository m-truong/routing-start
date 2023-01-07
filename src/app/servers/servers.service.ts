export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    // note: this method takes an 'id' of type number
    const server = this.servers.find(
      // then it has a f(x) inside that calls Array.find()
      (s) => {
        // which takes a higher-order f(x) as argument arrow function
        return s.id === id;
      }
      );
      // and returns whichever 'server' satisfies the .id 
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
