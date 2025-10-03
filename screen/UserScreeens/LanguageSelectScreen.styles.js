import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // --- General Layout & Background ---
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center",
  },
  card: {
    // Adjusted size constraints for responsiveness and clean look
    width: "95%",
    maxWidth: 450, // Max width for tablet/desktop views
    backgroundColor: "#F0FFF6", // Very light green/off-white background
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    // Enhanced Shadow for a strong floating effect
    shadowColor: "#1B7F4C", // Greenish shadow for depth
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 18,
    elevation: 15,
    marginVertical: 40,
  },

  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes it a perfect circle
    backgroundColor: "#FFFFFF", // Setting to pure white might cover the artifact better if the logo's BG is white
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    // Add a border that matches the card color for visual separation
    borderWidth: 4,
    borderColor: "#F0FFF6",
    // Optional: Subtle shadow to give it a floating effect
    shadowColor: "#000",
    shadowOpacity: 0.15, // Increased opacity for definition
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 8,
  },
  farmerIcon: {
     width: 40,
    height: 40,
    borderRadius: 50, // Makes it a perfect circle
    backgroundColor: "#FFFFFF", // Setting to pure white might cover the artifact better if the logo's BG is white
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    // Add a border that matches the card color for visual separation
    borderWidth: 1,
    borderColor: "#F0FFF6",
    // Optional: Subtle shadow to give it a floating effect
    shadowColor: "#000",
    shadowOpacity: 0.15, // Increased opacity for definition
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 15,
    elevation: 12,
  },
  retailerIcon:{
     width: 40,
    height: 40,
    borderRadius: 50, // Makes it a perfect circle
    backgroundColor: "#FFFFFF", // Setting to pure white might cover the artifact better if the logo's BG is white
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    // Add a border that matches the card color for visual separation
    borderWidth: 1,
    borderColor: "#F0FFF6",
    // Optional: Subtle shadow to give it a floating effect
    shadowColor: "#000",
    shadowOpacity: 0.15, // Increased opacity for definition
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 15,
    elevation: 12,
  },

  middlemanIcon: {
     width: 40,
    height: 40,
    borderRadius: 50, // Makes it a perfect circle
    backgroundColor: "#FFFFFF", // Setting to pure white might cover the artifact better if the logo's BG is white
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    borderWidth: 1,
    borderColor: "#F0FFF6",
    // Optional: Subtle shadow to give it a floating effect
    shadowColor: "#000",
    shadowOpacity: 0.15, // Increased opacity for definition
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 15,
    elevation: 12,
  },
  transportIcon: {
     width: 40,
    height: 40,
    borderRadius: 50, // Makes it a perfect circle
    backgroundColor: "#FFFFFF", // Setting to pure white might cover the artifact better if the logo's BG is white
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    // Add a border that matches the card color for visual separation
    borderWidth: 1,
    borderColor: "#F0FFF6",
    // Optional: Subtle shadow to give it a floating effect
    shadowColor: "#000",
    shadowOpacity: 0.15, // Increased opacity for definition
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 15,
    elevation: 12,
  },
  logoImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    backgroundColor: "#F0FFF6", // **MATCHES CARD BACKGROUND/PAGE COLOR**
  },
  // --- Title and Subtitle ---
  title: {
    fontSize: 32,
    fontWeight: "900", // Extra bold
    color: "#1B7F4C", // Primary Green
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    color: "#777",
    marginBottom: 35, // More space before selections
    textAlign: "center",
    fontWeight: "500",
  },

  // --- Sections and Labels ---
  section: {
    width: "100%",
    marginBottom: 25,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
    borderLeftWidth: 3,
    borderLeftColor: "#1B7F4C",
    paddingLeft: 8,
  },

  // --- Language Dropdown ---
  dropdown: {
    borderWidth: 1,
    borderColor: "#A5D6A7", // Lighter green border
    borderRadius: 12,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    // Subtle inner shadow effect
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownActive: {
    // Active state for press feedback
    backgroundColor: "#F0F8F5",
    borderColor: "#1B7F4C",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  dropdownArrow: {
    fontSize: 16,
    color: "#1B7F4C",
    fontWeight: "bold",
  },

  // --- Role Select ---
  roleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  roleButton: {
    width: "48%",
    minHeight: 100, // Ensure minimum tap target size
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 15,
    backgroundColor: "#FFF",
    // Base shadow
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  roleButtonActive: {
    // Enhanced active state for press feedback (ready for animation)
    transform: [{ scale: 0.96 }], // Deeper press
    opacity: 0.9,
    backgroundColor: "#F5F5F5",
  },
  roleButtonSelected: {
    borderColor: "#1B7F4C", // Highlight border
    backgroundColor: "#E6F5EC", // Lighter background when selected
    elevation: 6,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Add a slight lift when selected (ready for animation)
    transform: [{ scale: 1.02 }],
  },

  // Specific Role Button Layout Adjustments
  farmerButton: { gap: 8 },
  RetailerButton: { gap: 8 }, // Consistent naming
  MiddlemanButton: { gap: 8 },
  transportButton: { gap: 8 },

  roleIcon: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },
  roleText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
  roleTextSelected: {
    color: "#1B7F4C",
    fontWeight: "800",
    fontSize: 14,
  },

  // --- Primary/Secondary Buttons ---
  loginButtonActive: {
    // Feedback for the primary button press (ready for animation)
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  registerButtonActive: {
    // Feedback for the secondary button press (ready for animation)
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  loginButtonDisabled: {
    opacity: 0.6,
    shadowOpacity: 0.1,
    elevation: 0,
  },

  // --- Modal Styles (Bottom Sheet Design) ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end", // Modal slides up from bottom
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
    width: "100%",
    // Strong shadow at the top
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -5 },
    shadowRadius: 15,
    elevation: 20,
    // Ready for a component-level slide-up animation
    transform: [{ translateY: 0 }],
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 15,
    color: "#1B7F4C",
    textAlign: "left",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalOption: {
    paddingVertical: 15,
    width: "100%",
    alignItems: "flex-start",
  },
  modalOptionActive: {
    // Feedback when selecting a language option
    backgroundColor: "#E6F5EC",
  },
  modalOptionText: {
    fontSize: 17,
    color: "#333",
  },
  modalOptionSelectedText: {
    fontWeight: "800",
    color: "#1B7F4C",
  },
});
