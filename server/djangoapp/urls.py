from django.urls import path
from . import views

app_name = "djangoapp"

urlpatterns = [
    path("login", views.login_user, name="login_user"),
    path("analyze", views.analyze_review, name="analyze_review"),
]