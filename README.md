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
need to check if can do the same as a dev dependency

---

TESTING MECHANICS

```bash
bash db-test.sh
```

```bash
npm test
```

All tests are based in the data of scripts/test.sql

---
many-many: problem was the bad mapping i guess

how to use on update and on delete properly: https://stackoverflow.com/questions/6720050/foreign-key-constraints-when-to-use-on-update-and-on-delete

Finally solved with belongs to in Availability with the foreign key on the source, can retrieve from Availability the Shop and the Bike.

Remember in the hasX the foreign key is in the destination

--- 
Sequelize transactional tests -> https://github.com/sequelize/sequelize/issues/11408

add this dev dependency -> https://www.npmjs.com/package/cls-hooked

now should use the module pattern to reuse the functions for the before's and after's in the test suites to avoid repetition (and read the posts to understand it well)

---

add a bike to a shop

delete a bike (from bikes and delete it from the Availability (using cascade, read about it...))

--- 



