from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

name = "World"

@app.route('/api/name', methods=['GET'])
def hello_world():
    global name
    return jsonify(message=f"Hello {name}!")

@app.route('/api/name', methods=['POST'])
def set_name():
    global name
    data = request.json
    if 'name' in data:
        name = data['name']
        return jsonify(success=True, message="Name updated successfully!")
    else:
        return jsonify(success=False, message="No name provided!"), 400

if __name__ == '__main__':
    app.run(debug=True)
