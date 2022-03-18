import { PrismaClient } from '@prisma/client';
import { __PROD__ } from '@utils/constants';

let prisma: PrismaClient;

if (__PROD__) {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
