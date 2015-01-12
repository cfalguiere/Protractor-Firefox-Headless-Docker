#!/bin/bash

SCRIPTDIR=$(dirname $0)

echo "Starting at $( date )"

cd /opt/protractor/app

echo '############################################################'
echo '############### Xvfb settings'

Xvfb :21 -screen 0 1024x768x24 &
export DISPLAY=:21
#export DISPLAY=:10

echo '############################################################'
echo '############### Starting Webdriver and Http-server'

npm install

webdriver-manager start &

#  Started HttpContext[/,/]

sleep 10
echo
echo '############################################################'
echo '############### Running Test suite'

protractor test/e2e/protractor.conf.js

