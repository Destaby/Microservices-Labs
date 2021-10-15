### Check Kubernetes Cluster

```
kubectl cluster-info
```

### Build Services

```
docker build -t service1:0.1 -f service1/Dockerfile .
docker build -t service2:0.1 -f service2/Dockerfile .
```

### Create Deployments

```
kubectl apply -f service-1.deployment.yml
kubectl apply -f service-2.deployment.yml
```

### Create Services

```
kubectl apply -f config.service-1.yml
kubectl apply -f config.service-2.yml
```

### Create Ingress

```
kubectl apply -f config.ingress.yml
```

### Check

```
curl $(minikube ip)/api/service-1
curl $(minikube ip)/api/service-2
```
