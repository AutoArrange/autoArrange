#!/bin/bash
if [[ $0 =~ ^\/.* ]]    #判断当前脚本是否为绝对路径，匹配以/开头下的所有
then
  script=$0
else
  script=$(pwd)/$0
fi
script=`readlink -f $script`   #获取文件的真实路径
script_path=${script%/*}     #获取文件所在的目录
realpath=$(readlink -f $script_path)   #获取文件所在目录的真实路径

cd $realpath
cd ../

npm install -g hap-toolkit
npm install
npm run build
npm run server