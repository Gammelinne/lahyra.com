FROM node:current-alpine3.20 as base

# Set environment variables
ARG PORT=3000
ENV NODE_ENV=production
ARG NUXT_SPOTIFY_CLIENT_ID
ARG NUXT_SPOTIFY_CLIENT_SECRET
ARG NUXT_GITHUB_TOKEN
ENV NUXT_GITHUB_TOKEN=$NUXT_GITHUB_TOKEN
ARG NUXT_XBOX_AUTHORIZATION
ENV NUXT_XBOX_AUTHORIZATION=$NUXT_XBOX_AUTHORIZATION
ENV NUXT_SPOTIFY_CLIENT_ID=$NUXT_SPOTIFY_CLIENT_ID
ENV NUXT_SPOTIFY_CLIENT_SECRET=$NUXT_SPOTIFY_CLIENT_SECRET

# Create app directory
WORKDIR /src


# Build stage
FROM base as build
COPY --link package.json package-lock.json ./
RUN npm install --production=false
COPY --link . .
RUN npm run build
RUN npm prune

# Expose the host and port
ENV HOST 0.0.0.0
EXPOSE $PORT
ENTRYPOINT ["node", ".output/server/index.mjs"]
