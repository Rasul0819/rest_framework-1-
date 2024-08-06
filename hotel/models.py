from django.db import models

class HotelCategory(models.Model):
    klas = models.CharField(max_length=255,verbose_name='Hoteldin kategoriyalari:')
    slug = models.SlugField(verbose_name='Hoteldin slugi:',
                            max_length=255,unique=True)
class Hotel(models.Model):
    hotel_name = models.CharField(max_length=255,verbose_name='Hoteldin ati:')
    adress = models.CharField(max_length=255,verbose_name='Hoteldin adresi:')
    klas = models.ForeignKey(HotelCategory,on_delete=models.CASCADE,
                             verbose_name='Hoteldin kategoriyalari:')
    baxasi = models.DecimalField(max_digits=10,decimal_places=1,
                                 verbose_name='Hoteldin 1 kunlik cenasis:')
    image1 = models.ImageField(verbose_name='Hoteldin suwreti 1:',
                               upload_to='hotels',null=True,blank=True)
    image2 = models.ImageField(verbose_name='Hoteldin suwreti 2:',
                               upload_to='hotels',null=True,blank=True)
    image3 = models.ImageField(verbose_name='Hoteldin suwreti 3:',
                               upload_to='hotels',null=True,blank=True)
    