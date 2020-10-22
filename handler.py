import json
import os
import subprocess

def castorTraffic(event, context):

    subprocess.run('./start.sh')

    body = {
        "message": "Calling Castor Traffic Generator...",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response