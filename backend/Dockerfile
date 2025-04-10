FROM node

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar dependencias e instalarlas
COPY package*.json ./
RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install

# Copiar el resto del código
COPY . .

# Copiar el script de espera
COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

EXPOSE 3000

# Espera a que la DB esté lista antes de correr el backend
ENTRYPOINT ["/wait-for.sh"]
CMD ["npm", "run", "db:migrate-and-start"]
