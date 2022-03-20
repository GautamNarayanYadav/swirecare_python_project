from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import status

class ContactAPI(APIView):
    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            stu = Contact.objects.get(id=id)
            serializer = ContactSerializer(stu)
            return Response(serializer.data)

        stu = Contact.objects.all()
        serializer = ContactSerializer(stu, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data Created'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Create your views here.
def HomePage(request):
    return render(request, 'index.html')

def Privacy(request):
    return render(request, 'privacy_policy.html')

def Terms(request):
    return render(request, 'terms_and_conditions.html') 

    
           