
from django.urls import path, include
from . import views

urlpatterns = [
    
    path('api/list/', views.PlanList.as_view()),
    path('api/create/', views.PlanCreate.as_view()),
    path('api/delete/<int:id>/', views.PlanDelete.as_view()),
]
