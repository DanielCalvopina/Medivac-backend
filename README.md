# Medivac-backend

# levantar el docker

docker compose up -d

# env

DATABASE_URL="postgresql://medivac:medivac@localhost:5432/medivac?schema=public"

# actualizar el prisma

npx prisma generate
npx prisma migrate dev --name init
npx prisma studio

# reiniciar desde 0 la base de datosS

npx prisma migrate reset
npx prisma migrate dev --name init_full
