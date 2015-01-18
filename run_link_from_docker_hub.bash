CONTAINER_NAME=protractor

CONTAINER_ID=$( sudo docker ps -a | grep $CONTAINER_NAME | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

sudo docker run  --name $CONTAINER_NAME  -v /vagrant/deployedproject:/opt/protractor/project -e TEST_FILE=test/e2e/protractor.conf.js --link nginx_bricks:web  cfalguiere/protractor-firefox-headless
