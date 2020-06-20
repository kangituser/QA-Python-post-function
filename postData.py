import requests
from datetime import datetime


def postData(ID, module, system, screen, component, field_desc, test_desc, desired_result, project, status, board_name):
    url = 'http://localhost:8080/'
    headers = {'Content-Type': 'application/json', 'Accept': 'text/plain'}
     
    payload = {
        'ID': ID,
        'module': module,
        'system': system,
        'screen': screen,
        'component': component,
        'field_desc': field_desc,
        'test_desc': test_desc,
        'desired_result': desired_result,
        'project': project,
        'status': status,
        'board_name': board_name
    }
    r = requests.post(url, payload, headers)
    # print(r.text)
