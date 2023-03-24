from django.urls import path
from .api.views import (
                        PinPositionCreateView, 
                        PinPositionListView,
                        PinPositionUpdateView,
                        PinPositionDestroyView
                    )

urlpatterns = [
    path('pins/',PinPositionListView.as_view(),name="pin positions list"),
    path('pin/add/',PinPositionCreateView.as_view(),name="add_pinPosition"),
    path('pin/edit/<int:pk>',PinPositionUpdateView.as_view(),name="edit_pinPosition"),
    path('pin/delete/<int:pk>',PinPositionDestroyView.as_view(),name="delete_pinPosition"),
]