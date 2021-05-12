import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO users(id, name, email, password, driver_license, "isAdmin", created_at)
     VALUES('${id}', 'admin', 'admin@rentx.com', '${password}', '123456', true, 'now()' )
    `
  );

  await connection.close();
}

create().then(() => console.log("User admin created!"));
