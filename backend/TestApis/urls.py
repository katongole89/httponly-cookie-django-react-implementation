from django.urls import path, re_path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    re_path(r'^login/?$', views.LoginView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)