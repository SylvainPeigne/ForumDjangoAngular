#!/bin/sh

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
forumLocsApp/manage.py flush << 'EOF'
yes
EOF
forumLocsApp/manage.py loaddata create_user
forumLocsApp/manage.py loaddata create_categories
forumLocsApp/manage.py init_forum
forumLocsApp/manage.py makemigrations
forumLocsApp/manage.py migrate
echo "Now just run workon forumLocsapp and ./forumLocsApp/manage.py runserver"
