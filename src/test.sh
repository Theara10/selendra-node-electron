#!/bin/bash

# declare OS platform & its package managers
declare -A osInfo;
osInfo[/etc/debian_version]="apt-get install -y"
osInfo[/etc/alpine-release]="apk --update add"
osInfo[/etc/centos-release]="yum install -y"
osInfo[/etc/fedora-release]="dnf install -y"
osInfo[/etc/os-release]="pacman -Syyu --noconfirm"
# osInfo[/etc/os-release]="brew install -y"

for f in ${!osInfo[@]}
do
    if [[ -f $f ]];then
        package_manager=${osInfo[$f]}
    fi
done

# list packages to install
package="git"
if [[ ${package_manager} == "pacman -Syyu --noconfirm" ]]; then 
    package+=" docker noto-fonts-emoji"
else
    package+=" docker.io"
fi

sudo $package_manager $package

# pull testnet from docker
sudo docker image pull selendrachain/selendra-chain:latest

# create directory for selendra-chaindb
# read -p "Name a directory where the Selendra Chain will store: " selendradb
SELENDRA_DB_NAME="selendradb1"
mkdir -p ${HOME}/${SELENDRA_DB_NAME}

# allow selendra-chaindb (blockchain data) access to local directory
sudo chown 1000.1000 /home/$USER/${SELENDRA_DB_NAME} -R

echo "passed"

# read -p "What should the container call?: " x
# read -p "What do you want to call your node?:" y
# CONTAINER_NAME="con4"
# NODE_NAME="node04

# # # run docker container
# sudo docker container run \
#     --network="host" \
#     --name ${CONTAINER_NAME}\
#     -v /home/$USER/${SELENDRA_DB_NAME}:/selendra/data \
#     selendrachain/selendra-chain:latest \
#     --base-path selendra/data \
#     --chain cardamom \
#     --port 30333 \
#     --rpc-port 9933 \
#     --ws-port 9944 \
#     --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" \
#     --validator \
#     --name ${NODE_NAME} \
#     --bootnodes /ip4/157.245.56.213/tcp/30333/p2p/12D3KooWDLR899Spcx4xJ3U8cZttv9zjzJoey3HKaTZiNqwojZJB

