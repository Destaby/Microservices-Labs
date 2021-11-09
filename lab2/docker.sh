docker build -t service1:0.1 -f service1/Dockerfile .
docker build -t service2:0.1 -f service2/Dockerfile .
docker build -t root-service:0.1 -f root-service-1/Dockerfile .
docker build -t root-service-2:0.1 -f root-service-2/Dockerfile .