FROM amazoncorretto:11-alpine-jdk
MAINTAINER baeldung.com
COPY target/springboot-backend-0.0.1-SNAPSHOT.jar springboot-backend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "-Djava.net.preferIPv4Stack=true" ,"/springboot-backend-0.0.1-SNAPSHOT.jar"]
