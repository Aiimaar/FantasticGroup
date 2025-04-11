FROM node AS builder

# Crear directorio de trabajo
WORKDIR /app

<<<<<<< HEAD
# Copiar dependencias y instalar
=======

>>>>>>> 6ba1fd1149fdc32da04de9f3e3a4b2d6aa8de229
COPY package*.json ./
RUN npm install  


<<<<<<< HEAD
# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# Usar Nginx para servir la aplicación
=======
ARG VITE_API_BASE_URL
RUN echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" > .env


COPY . ./


RUN npm run build


>>>>>>> 6ba1fd1149fdc32da04de9f3e3a4b2d6aa8de229
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./


# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"] 