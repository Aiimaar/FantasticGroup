FROM node

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar dependencias e instalarlas
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 3000

# Punto de entrada de desarrollo (resetea DB, ¡solo usar si lo sabés!)
# ENTRYPOINT [ "npm", "run", "db:reset-and-start" ]

# Entrada normal (comentar la de arriba si vas a producción)
ENTRYPOINT [ "npm", "run", "db:migrate-and-start" ]
