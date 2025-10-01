import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 25,
  },
  scrollContent: {
    flexGrow: 1,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#deffe4f1',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#1B7F4C',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 19,
    color: '#666',
    marginBottom: 22,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  dropdown: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 13,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  dropdownText: {
    fontSize: 18,
    color: '#333',
  },
  dropdownArrow: {
    fontSize: 18,
    color: '#999',
    marginLeft: 230,
  },
  roleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  roleButton: {
    width: '48%',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  roleButtonSelected: {
    borderColor: '#1B7F4C',
    backgroundColor: '#E6F5EC',
  },
  roleIcon: {
    width: 30,
    height: 29,
    marginRight: 8,
    resizeMode: 'contain',
  },
  roleText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  roleTextSelected: {
    color: '#1B7F4C',
    fontWeight: '600',
  },
  farmerButton: {
    // alignContent: 'center',
    gap:15,
  },
  RetailerButton: {
    gap: 18,
  },
  MiddlemanButton:{

  },
  transportButton:{

  },

  phoneInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#1B7F4C',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  loginButtonDisabled: {
    backgroundColor: '#A5D6BA',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});