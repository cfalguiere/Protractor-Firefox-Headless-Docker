# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
sudo apt-get update
sudo apt-get install -y docker.io
sudo docker run --rm -v /usr/local/bin:/target jpetazzo/nsenter
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # use ubuntu trusty64 box (v14)
  #config.vm.box = "ubuntu-trusty64-virtualbox.box"
  config.vm.box = "ubuntu/trusty64"

  # give a hostname to the box
  config.vm.hostname = "test"

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
  end

  # fix annoying messages about stdin
  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

  # run the installation script
  config.vm.provision "shell", inline: $script

end
