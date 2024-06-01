from django.shortcuts import render
from .models import Plan
from .serializers import PlanSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, ListAPIView, DestroyAPIView
from rest_framework import status

# Create your views here.


class PlanList(ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class PlanCreate(ListCreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class PlanDelete(DestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    lookup_field = 'id'  # Specify the lookup field if it's not 'pk'



# class PlanView(APIView):
    
#     def get(request, formate=None):
#         pass
        
        
#     def delete(self, request):
#         Plan.objects.all().delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
        