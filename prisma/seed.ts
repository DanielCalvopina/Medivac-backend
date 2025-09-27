import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({ data: {
    email: 'admin@empresa.com', nombre: 'Admin', rol: 'Admin', estado: 'Activo'
  }});
}

main().finally(() => prisma.$disconnect());
