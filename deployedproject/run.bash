CONTAINER_NAME=nginx_bricks
IMAGE_NAME=nginx_bricks_image

CONTAINER_ID=$( sudo docker ps -a | grep "$IMAGE_NAME":latest | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

sudo docker run --name $CONTAINER_NAME -p 80:80 -d $IMAGE_NAME
