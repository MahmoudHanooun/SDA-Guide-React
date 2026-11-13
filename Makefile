IMAGE=sda-guide
build:
	docker build -t $(IMAGE) .
run:
	docker run -d --name sda-guide -p 80:80 $(IMAGE)
stop:
	docker stop sda-guide && docker rm sda-guide
logs:
	docker logs sda-guide
