IMAGE_NAME=protractor_image

CONTAINER_ID=$( sudo docker ps -a | grep "$IMAGE_NAME":latest | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

IMAGE_ID=$( sudo docker images | grep $IMAGE_NAME | awk '{print $3}' )
if [[ ! -z $IMAGE_ID ]]; then
  echo "Removing old image"
  sudo docker rmi $IMAGE_ID > /dev/null
fi

sudo docker build -t $IMAGE_NAME .
