FROM node


WORKDIR /usr/src/app


COPY package*.json ./
RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install --production  


COPY . ./


COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

EXPOSE 80 


ENTRYPOINT ["/wait-for.sh"]
CMD ["npm", "run", "db:migrate-and-start"]  
