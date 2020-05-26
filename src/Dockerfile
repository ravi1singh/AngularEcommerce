### STAGE 1: Build ###
FROM node:12.14.0-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm --version
RUN node --version
RUN npm install
# RUN npm audit fix
# RUN npm list
# Run npm install -g @angular/cli
# COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx
COPY --from=build /usr/src/app/dist/Ecommerce/ /usr/share/nginx/html