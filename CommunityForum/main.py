from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET'] = "secret!123"  # Corrected config key to 'SECRET_KEY'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def handle_message(message):
    print("Received message:" + message)  # Corrected indentation and typo
    if message != "User connected!":
        send(message, broadcast=True)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    socketio.run(app, host="192.168.68.125", port=8000)

