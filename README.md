# Protractor-Firefox-Headless-Docker
Run Protractor tests using Firefox headless in a docker container

## Prerequisites to run the vagrant vm

- vagrant
- virtualbox or another vm provider
- ssh client (for Windows users, you may install Git for Windows and use the bash and ssh client provided with msysgit)


## Create the hosting vm with docker


```bash
$ vagrant up
```
This will create a VM with docker already installed

Then ssh to the VM and proceed to the shared folder

```bash
$ vagrant ssh
$ cd /vagrant
```
All the files located in the same folder as Vagrantfile will be available under /vagrant within the VM.

## 




## Running the test suite

Type the following at the vm's ssh prompt

```bash
$ sudo docker run --name protractor --volume /vagrant/testapp:/opt/protractor/app --env TEST_FILE=test/e2e/protractor.conf.js cfalguiere/protractor-firefox-headless
```
A sample test file is provided in the *testapp/test/e2e/* folder.

The Angular app directory should be mounted as /opt/protractor/app in the docker container. Change /vagrant/app to whatever your app home is.

The test file is passed as to the container as an environment variable. Change test/e2e/protractor.conf.js to the path to the protractor test confiiuration file. The file should be relative to the folder mounted as a volume.




## Running the test suite against another docker container

Use --link if the system under test is running in another docker container hosted on the same vm.

```bash
sudo docker run  --name protractor  --volume /vagrant/testapp:/opt/protractor/app --env TEST_FILE=test/e2e/protractor.conf.js --link nginx_test:web cfalguiere/protractor-firefox-headless
```

The docker container which name is *nginx_test* is linked under the name web to the docker contaienr. 

For instance, if a web servr is running on port 80 in nginx_test, the landing page of the site could be visited at http://web/index.html from the protractor container.

## Building the protractor container

Run the build.bash script. This will build the container image protractor_image.


