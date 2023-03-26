from flask import Flask
import functions
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def hello_world():
    return ({"data": 'Hello, World!'})

@app.route('/login')
def hello():
    return {'data': 'I am logging in 😎'}

@app.route('/signup')
def signup():
    return 'I am logging in 🥰'

