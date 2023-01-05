https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate

https://millo-l.github.io/Synchronize-docker-compose-nodejs-mysql-execution-order/

- pd: solution was the incorrect name of the host

- the volume is mounted on /opt/mysql_data, maybe in localhost is ok to put it in the project folder structure

- start to test some use cases and create some queries with sequelize (transactions, supertest, jest)

- divide the docker-compose files to do different profiles

- try the repository and use it with mongoDB atlas if it is possible

- make some data migration/generation

- try to think how to implement a microservices architecture

--- 

About testing resources:

Have used jest and a combination between jest and express

- <a href="https://jestjs.io/docs/getting-started">jest</a>
- <a href="https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/">jest and supertest</a>

--- 

Usage of process manager to run npm scripts in detach mode, is useful to name processes and stop them in such an elegant way

pm2

install it with the following command:

```bash
npm install pm2 -g
``` 

---

TESTING MECHANICS

```bash
bash db-test.sh
```

```bash
npm test
```




