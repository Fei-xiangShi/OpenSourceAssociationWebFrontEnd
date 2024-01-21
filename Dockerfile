FROM node:alpine as build-stage

WORKDIR /var/www/osa

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm i

RUN npm run build

RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:alpine as prod-stage

WORKDIR /var/www/osa

COPY --from=build-stage /var/www/osa/.output/ ./.output/

RUN chown -R node /var/www/osa

USER node

CMD [ "node", ".output/server/index.mjs" ]
