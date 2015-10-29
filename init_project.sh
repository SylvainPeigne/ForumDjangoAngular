#!/bin/sh

source /home/sylflo/.virtualenvs/locsAppForum/bin/activate
forumLocsApp/manage.py makemigrations
forumLocsApp/manage.py migrate
forumLocsApp/manage.py loaddata create_user
forumLocsApp/manage.py loaddata create_categories
forumLocsApp/manage.py init_forum
