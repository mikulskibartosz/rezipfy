FROM openjdk:8-jre-alpine

RUN \
apk add bash && \
apk add --no-cache curl && \
apk add --update nodejs nodejs-npm

RUN npm install -g @vue/cli

RUN addgroup -g 12345 appuser && \
    adduser -u 12345 -D -G appuser appuser
USER appuser

WORKDIR /home/appuser

#docker build -t vue .
#docker run -v $(pwd .):/home/appuser -v $(pwd .)/.packages:/home/appuser/.ivy2 -it vue:latest
#docker run -v $(pwd .):/home/appuser -p 8080:8008 -it vue:latest
