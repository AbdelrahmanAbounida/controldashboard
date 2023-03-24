from django.db import models

class PinPosition(models.Model):
    x = models.FloatField(null=False)
    y = models.FloatField(null=False)
    z = models.FloatField(null=False)

