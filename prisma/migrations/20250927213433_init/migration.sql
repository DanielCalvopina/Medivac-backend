-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'Operador', 'Cliente', 'Supervisor');

-- CreateEnum
CREATE TYPE "UserState" AS ENUM ('Invitado', 'Activo', 'Bloqueado');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" "UserRole" NOT NULL,
    "estado" "UserState" NOT NULL DEFAULT 'Invitado',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
