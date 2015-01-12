sudo docker rm  protractor
sudo docker run  --name protractor  -v /vagrant:/opt/protractor protractor_image
#sudo docker run  --name protractor  -v /vagrant:/opt/protractor --link nginx_test:web protractor_image
