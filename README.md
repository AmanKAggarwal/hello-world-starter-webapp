# Hello World Project

This project demonstrates a simple web application with a backend API written in Python (Flask) and a frontend application written in React. The React application fetches a "Hello [name]!" message from the backend API, where [name] can be changed via a new endpoint.

## Prerequisites

Before setting up the project, you need to install the following software:

1. **Python**:
    - Download and install Python from [python.org](https://www.python.org/downloads/).
    - During installation, make sure to check the option "Add Python to PATH".

2. **Node.js and npm**:
    - Download and install Node.js from [nodejs.org](https://nodejs.org/).
    - npm (Node Package Manager) is included with Node.js.

3. **Git**:
    - Download and install Git from [git-scm.com](https://git-scm.com/downloads).

4. **Visual Studio Code (VS Code)** (Recommended IDE):
    - Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/).

## Setup Instructions

### Clone the Repository (Ignore if "Download Zip")

1. **Open Terminal or Command Prompt**:
    - On Windows, you can open Command Prompt or PowerShell.
    - On macOS or Linux, you can use Terminal.

2. **Clone the repository**:

    ```bash
    git clone <repository_url>
    cd hello-world-project
    ```

### Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Install Dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Backend Server**:

    ```bash
    python app.py
    ```

The backend server will run on `http://127.0.0.1:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

    From the root of the project:

    ```bash
    cd frontend
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the React Application**:

    ```bash
    npm start
    ```

The React application will run on `http://localhost:3000` and fetch the message from the backend API.

## How to Use

1. Start the backend server as described in the backend setup instructions.
2. Start the frontend application as described in the frontend setup instructions.
3. Open your browser and navigate to `http://localhost:3000` to see the "Hello [name]!" message fetched from the backend API.
4. Enter a new name in the input field and click the "Change Name" button to update the name displayed in the message.
5. Note: Restarting the server will reset the name to "World".

## Testing

### Backend Tests

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Run the tests**:

    ```bash
    python test_app.py
    ```

### Frontend Tests

1. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

2. **Run the tests**:

    ```bash
    npm test
    ```

## Troubleshooting

- Ensure both backend and frontend servers are running.
- Check the browser console for any errors if the message is not displayed.

## Additional Resources

- **Python Documentation**: [docs.python.org](https://docs.python.org/3/)
- **Flask Documentation**: [flask.palletsprojects.com](https://flask.palletsprojects.com/en/2.0.x/)
- **Node.js Documentation**: [nodejs.org](https://nodejs.org/en/docs/)
- **React Documentation**: [reactjs.org](https://reactjs.org/docs/getting-started.html)
- **VS Code Documentation**: [code.visualstudio.com/docs](https://code.visualstudio.com/docs)

## Useful tools
- [Postman](https://www.postman.com/downloads/): Useful for manually testing backend routes before there's a frontend implementation. 
- [Prettier VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


