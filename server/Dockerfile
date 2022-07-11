FROM node:latest as build
WORKDIR /app
#On copie notre package json dans le dossier courant
COPY package*.json ./
#Comme npm install mais update pas les packages
RUN npm ci
#On copie l'appli dans le conteneur pour pouvoir build
COPY . .
#Build l'application et enlève les packages inutilisés
RUN npm run build \
  && npm prune --production



FROM node:latest as launch
WORKDIR /app
#On copie les fichiers qui nous intéressent dans un nouveau conteneur
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules/ ./node_modules/
#On expose sur le port
EXPOSE 8080
#run l'application build
CMD ["node", "dist/main.js"]