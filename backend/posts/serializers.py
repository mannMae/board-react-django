from rest_framework.serializers import ModelSerializer
from .models import Post

class PostListSerializer(ModelSerializer):
    
    class Meta:
        model = Post
        fields= "__all__"


class PostDetailSerializer(ModelSerializer):
    
    class Meta:
        model = Post
        fields = "__all__"