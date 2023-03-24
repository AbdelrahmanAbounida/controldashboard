from email.policy import default
from django.db import models

from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class AccountManager(BaseUserManager):

    def create_user(self,email,password=None):
        if not email:
            raise ValueError("User must have an email")

        user = self.model(
            email = self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,password):

        if password is None:
            raise TypeError('Super user should have password')

        user = self.create_user(
            email,
            password=password
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        print(f"email: {email}")
        print(f"password: {password}")

        return user

class Account(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=50,unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    has_ros_connection = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = AccountManager()


    def has_module_perms(self, app_label):
        return self.is_superuser

    def __str__(self):
        return f"{self.email}"

