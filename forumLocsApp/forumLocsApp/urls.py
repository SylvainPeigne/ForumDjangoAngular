"""forumLocsApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework_nested import routers

from .views import IndexView
from authentication.views import LoginView, LogoutView
from forum.views import CategoryViewSet, SubjectViewSet, NormalMessageViewSet, NormalMessagePaginateSubjectViewSet, GetNumberPageInSubjectViewSet, GetUserById


router = routers.SimpleRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'messages', NormalMessageViewSet)

users_router = routers.NestedSimpleRouter(
    router, r'subjects', lookup='subject'
)
users_router.register(r'messages', NormalMessagePaginateSubjectViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^docs/', include('rest_framework_swagger.urls')),

    #url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(users_router.urls)),

    url(r'^api/', include(router.urls)),

    url(r'^api/subjects/nb-message/(?P<subject_pk>[0-9]+)/$', GetNumberPageInSubjectViewSet.as_view()),
    url(r'^api/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/auth/logout/$', LogoutView.as_view(), name='logout'),

    url(r'^api/users/(?P<pk>[0-9]+)$', GetUserById.as_view(), name='getuserid'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += url('^.*$', IndexView.as_view(), name='index'),