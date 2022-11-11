from django.urls import path, re_path
# from sales.api_v1 import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    re_path(r'^groups-data/?$', views.GroupsDataApiView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)