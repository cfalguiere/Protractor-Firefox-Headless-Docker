FROM ubuntu
# TODO tag

RUN apt-get update

RUN apt-get install -y git nodejs nodejs-legacy npm firefox xvfb default-jre

RUN npm install -g jasmine-node karma-firefox-launcher protractor

RUN npm update

RUN webdriver-manager update

ENV HOME /opt/protractor/app
WORKDIR /opt/protractor

COPY scripts/ /opt/protractor/scripts/

CMD ["/opt/protractor/scripts/run-e2e-tests.bash"]
#CMD ["ls", "/opt/protractor/scripts"]
