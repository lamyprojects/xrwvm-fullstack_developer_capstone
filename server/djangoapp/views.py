import json
import logging

from django.http import JsonResponse
from django.contrib.auth import login, authenticate
from django.views.decorators.csrf import csrf_exempt

logger = logging.getLogger(__name__)


@csrf_exempt
def login_user(request):
    """
    Login endpoint used by the project frontend.
    Expects JSON body: {"userName": "...", "password": "..."}
    """
    try:
        data = json.loads(request.body or "{}")
        username = data.get("userName")
        password = data.get("password")
        if not username or not password:
            return JsonResponse({"error": "userName and password are required"}, status=400)

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"userName": username, "status": "Authenticated"})

        return JsonResponse({"userName": username, "status": "Unauthorized"}, status=401)

    except Exception as e:
        logger.exception("login_user error")
        return JsonResponse({"error": str(e)}, status=500)


def analyze_review(request):
    """
    Task 16: Sentiment analysis endpoint.
    GET /djangoapp/analyze?text=Fantastic%20services
    Returns JSON like: {"sentiment": "positive", "text": "..."}
    """
    text = request.GET.get("text", "").strip()
    if not text:
        return JsonResponse({"error": "text query parameter is required"}, status=400)

    # Simple deterministic sentiment logic (enough for the lab task)
    t = text.lower()
    positive_words = ["fantastic", "great", "excellent", "amazing", "good", "awesome", "love"]
    negative_words = ["bad", "terrible", "awful", "poor", "hate", "worst"]

    if any(w in t for w in positive_words) and not any(w in t for w in negative_words):
        sentiment = "positive"
    elif any(w in t for w in negative_words) and not any(w in t for w in positive_words):
        sentiment = "negative"
    else:
        sentiment = "neutral"

    return JsonResponse({"sentiment": sentiment, "text": text})