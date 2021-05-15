import { PrismaClient } from '@prisma/client';
import { FastifyPluginCallback } from 'fastify';

export const decorateRequest: FastifyPluginCallback = (fastify, options, done) => {
  const prisma = new PrismaClient();
  const name = (options as any).name || 'prisma';

  fastify.decorateRequest(name, prisma);

  done();
};

declare module 'fastify' {
  interface FastifyRequest {
    prisma: PrismaClient;
  }
}
