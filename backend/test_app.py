import unittest
from app import app

class FlaskTestCase(unittest.TestCase):
    
    # Test the GET endpoint
    def test_hello_world(self):
        tester = app.test_client(self)
        response = tester.get('/api/name', content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Hello World!', response.data)
    
    # Test the POST endpoint
    def test_set_name(self):
        tester = app.test_client(self)
        response = tester.post('/api/name', json={'name': 'Alice'}, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Name updated successfully!', response.data)
        
        # Verify that the name was changed
        response = tester.get('/api/name', content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Hello Alice!', response.data)

if __name__ == '__main__':
    unittest.main()
