from django.shortcuts import render
from django.views.generic import TemplateView
import pusher
from django.conf import settings

class Timer(TemplateView):
    template_name = 'timer.html'

    
    
class Adm(TemplateView):
    template_name = 'adm.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['channel'] = 'timer-channel'
        context['pusher_key'] = '1ca09765c860dea6d83d'
        return context
    
    def post(self, request, *args, **kwargs):
        pusher_client = pusher.Pusher(
            app_id=settings.PUSHER_APP_ID,
            key=settings.PUSHER_KEY,
            secret=settings.PUSHER_SECRET,
            cluster=settings.PUSHER_CLUSTER,
            ssl=True
        )
        
        format_time = request.POST.get('counter')
        pusher_client.trigger('private-timer-123', 'my-event', {"message": format_timer})  # passando o valor formatado para trigger()
        return render(request, self.template_name)
