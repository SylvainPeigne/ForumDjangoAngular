from django.test import TestCase

# Create your tests here.

class Test42(TestCase):
	def test_for_jenkins(self):
		self.assertEqual(True, True)
