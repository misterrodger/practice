import { Network, StartedNetwork } from 'testcontainers';
import { MySqlContainer } from '@testcontainers/mysql';

describe('first test', () => {
  beforeAll(async () => {
    const network: StartedNetwork = await new Network().start()  // move all this setup to central files and pass to tests

    const mySqlContainer = await new MySqlContainer('mysql:8')
      .withName('test_mysql')
      .withUsername('username')
      .withUserPassword('password')
      .withDatabase('test_db')
      .withExposedPorts(4000)
      .withNetwork(network)
      .start();

    console.log('mySql container running at: ', mySqlContainer.getConnectionUri())
  })

  it('should run', () => {
    expect(1 + 2).toBe(3)
  });
});
