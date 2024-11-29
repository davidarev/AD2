import {MongoClient} from "mongodb"
import {VueloModelo} from "./type.ts"
import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import { schema } from "./schema.ts";
import { resolvers } from "./resolver.ts";

const mongo_url = Deno.env.get("MONGO_URL");
if(!mongo_url) {
  console.error("URL a MongoDB no encontrada")
  Deno.exit(1);
}

const cliente_mongo = new MongoClient(mongo_url);
await cliente_mongo.connect();

const db = cliente_mongo.db("vuelos");
const coleccionVuelos = db.collection<VueloModelo>("vuelos");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ coleccionVuelos }),
});

console.info(`Server ready at ${url}`);