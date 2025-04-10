FROM node AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias y instalar
COPY package*.json ./
RUN npm install

# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# Usar Nginx para servir la aplicación
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
