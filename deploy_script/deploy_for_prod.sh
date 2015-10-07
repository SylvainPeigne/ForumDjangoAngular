#!/bin/sh

cd /var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular
eval `ssh-agent`
ssh-add /var/lib/jenkins/.ssh/locsAppGitHub_rsa
git checkout .
git pull

source /var/lib/jenkins/.virtualenvs/locsAppForum/bin/activate
pip install -r /var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular/forumLocsApp/requirements.txt
python  /var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular/forumLocsApp/manage.py collectstatic --noinput
python  /var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular/forumLocsApp/manage.py makemigrations
python  /var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular/forumLocsApp/manage.py migrate
cd /var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular/ForumLocsAppFront/dev
bower install
npm install
/var/www/locsapp-forum.sylflo.fr/ForumDjangoAngular/ForumLocsAppFront/dev/launch_all_gulp.sh
sudo /etc/init.d/nginx  restart

