import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // --- Main Screen & Layout ---
  container: {
    flex: 1, 
    paddingTop: 8,
    paddingBottom: 2,
    
  },
  scrollContent: {
    flexGrow: 1,
   
  },
  card: {
    width: '100%',
    height: '100%',
    maxWidth: 500, 
    backgroundColor: '#deffe4f1',
    borderRadius: 20, 
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B7F4C',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 13,
    color: '#777',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  
  // --- Form Fields ---
  section: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#333',
  },
  passwordContainer: {
    // Specific styles for password field if needed, but the shared inputContainer works well
  },
  passwordToggle: {
    paddingLeft: 10,
  },
  passwordToggleText: {
    color: '#1B7F4C',
    fontWeight: 'bold',
    fontSize: 12,
  },

  // --- Button Styles ---
  registerButton: {
    backgroundColor: '#1B7F4C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    shadowColor: '#1B7F4C',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
  registerButtonDisabled: {
    backgroundColor: '#A5D6BA',
    shadowOpacity: 0.1,
    elevation: 2,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  loginLink: {
    marginTop: 15,
    padding: 15,
  },
  loginLinkText: {
    color: '#1B7F4C',
    fontSize: 18,
    fontWeight: '600',
  }
});
