FROM node AS builder

# Crear directorio de trabajo
WORKDIR /app

COPY package*.json ./
RUN npm install  


ARG VITE_API_BASE_URL
RUN echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" > .env


COPY . ./


RUN npm run build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./


# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"] 