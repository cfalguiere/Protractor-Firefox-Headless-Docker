CONTAINER_NAME=protractor
IMAGE_NAME=protractor_image

CONTAINER_ID=$( sudo docker ps -a | grep "$IMAGE_NAME":latest | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

sudo docker run  --name $CONTAINER_NAME  -v /vagrant/testproject:/opt/protractor/project -e TEST_FILE=test/e2e/protractor.conf.js $IMAGE_NAME
#sudo docker run  --name protractor  -v /vagrant:/opt/protractor --link nginx_test:web protractor_image
