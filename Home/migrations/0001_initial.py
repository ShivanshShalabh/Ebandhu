# Generated by Django 3.1.1 on 2020-09-17 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=122)),
                ('email', models.EmailField(max_length=122)),
                ('phone', models.CharField(max_length=13)),
                ('desc', models.CharField(max_length=750)),
                ('date', models.DateField()),
            ],
        ),
    ]
