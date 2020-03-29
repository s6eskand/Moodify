import requests

url = 'http://127.0.0.1:8000/api/'
from google.cloud import speech_v1p1beta1
from google.cloud.speech_v1p1beta1 import enums


def sample_recognize(storage_uri):
    text_output = []
    response = requests.get(url)
    data_list = response.json()
    stt_audio_url =  data_list[-1]['audio_url']

    client = speech_v1p1beta1.SpeechClient()

    storage_uri = url

    language_code = "en-US"

    sample_rate_hertz = 44100

    encoding = enums.RecognitionConfig.AudioEncoding.MP3
    config = {
        "language_code": language_code,
        "sample_rate_hertz": sample_rate_hertz,
        "encoding": encoding,
    }
    audio = {"uri": storage_uri}

    response = client.recognize(config, audio)
    for result in response.results:
        alternative = result.alternatives[0]
        text_output.append(u"Transcript: {}".format(alternative.transcript))

# Instantiates a client
client = language.LanguageServiceClient()

sample_recognize(url)

# The text to analyze
text = u'TEXT'
document = types.Document(
    content=text,
    type=enums.Document.Type.PLAIN_TEXT)

# Detects the sentiment of the text
sentiment = client.analyze_sentiment(document=document).document_sentiment
mood_range = []

print('Text: {}'.format(text))
mood_range.append('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))

total_sentiment = 0
for i in range(len(mood_range)):
    total_sentiment += mood_range[i]['Sentiment']

total_sentiment /= len(mood_range)


