import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import * as SMS from 'expo-sms';

const InviteUser = React.memo(({ name, iconUrl }) => {
  const handleInvite = async () => {
    // const isAvailable = await SMS.isAvailableAsync();
    // if (isAvailable) {
    //   const { result } = await SMS.sendSMSAsync(
    //     ['0123456789', '9876543210'],
    //     'My sample HelloWorld message',
    //     {
    //       attachments: {
    //         uri: 'path/myfile.png',
    //         mimeType: 'image/png',
    //         filename: 'myfile.png',
    //       },
    //     }
    //   );
    // } else {
    //   // misfortune... there's no SMS available on this device
    // }
  }
  return (
    <TouchableOpacity style={styles.dropdownButton} onPress={handleInvite}>
      <View style={styles.friend}>
        {/* <Image source={iconUrl} style={styles.logo} /> */}
        <Text style={styles.dropdownText} numberOfLines={1}>{name}</Text>
      </View>
      <View style={styles.invite}>
        <Image
          style={styles.addPerson}
          source={require("../assets/images/gadgets/profile-add.png")}
        />
        <Text style={styles.sm}>invite</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  dropdownButton: {
    color: "#222",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderBottomColor: "#EEEEEE",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    height: 48,
    marginBottom: 8,
    alignItems: "center",
  },
  friend: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  invite: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    borderRadius: 8,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    height: 28,
  },
  addPerson: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  dropdownText: {
    color: "#222",
    fontFamily: "DM Sans",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 20,
  },
  sm: {
    color: "#222",
    fontFamily: "DM Sans",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },
});

export default InviteUser;
