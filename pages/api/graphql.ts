import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from 'type-graphql'
import { DogsResolver } from "@/src/schema/dogs.resolver";

import 'reflect-metadata'


const schema = await buildSchema({
  resolvers: [DogsResolver]
})

const server = new ApolloServer({
  schema
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await startServer;
  await server.createHandler({path: '/api/graphql'})(req, res);
}