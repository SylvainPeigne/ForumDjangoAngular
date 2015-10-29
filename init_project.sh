#!/bin/sh

<<<<<<< HEAD
if [ -f $HOME/.virtualenvs/forumLocsapp/bin/activate ]
then
    source $HOME/.virtualenvs/forumLocsapp/bin/activate
else
    mkvirtualenv forumLocsapp
fi
pip install -r forumLocsApp/requirements.txt
cd forumLocsApp
npm install
./manage.py bower_install
gulp css
cd -
forumLocsApp/manage.py loaddata create_user
forumLocsApp/manage.py loaddata create_categories
forumLocsApp/manage.py init_forum
echo "Now just run workon forumLocsapp and ./forumLocsApp/manage.py runserver"
=======
source /home/sylflo/.virtualenvs/locsAppForum/bin/activate
forumLocsApp/manage.py makemigrations
forumLocsApp/manage.py migrate
forumLocsApp/manage.py loaddata create_user
forumLocsApp/manage.py loaddata create_categories
forumLocsApp/manage.py init_forum
>>>>>>> 35ea65b30ea2ce71466b63f435590153c73e7148
