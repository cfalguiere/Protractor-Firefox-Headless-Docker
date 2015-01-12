sudo docker stop  protractor
sudo docker rm  protractor
sudo docker rmi protractor_image
sudo docker build -t protractor_image .
