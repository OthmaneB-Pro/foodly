# Étape 1 : Build de l'application React
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Étape 2 : Serveur Nginx pour servir le build
FROM nginx:alpine

# Copier les fichiers build générés à partir de l'étape précédente
COPY --from=build /app/build /usr/share/nginx/html

# Copier la config nginx custom si besoin (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose le port 80 (par défaut nginx écoute dessus)
EXPOSE 80

# Commande par défaut (nginx démarre automatiquement)
CMD ["nginx", "-g", "daemon off;"]
