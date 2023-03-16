import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const AboutModal = (props) => {
  const { channelDetails, modalVisible, setModalVisible } = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.channelName}>
              {channelDetails?.meta?.title}
            </Text>
            <Text style={styles.aboutChannel}>
              {channelDetails?.meta?.description}
            </Text>
            <Text>
              Genre - {channelDetails?.meta?.tvGenre.map((genre) => genre)}
            </Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    height: "100%"
  },
  modalView: {
    minHeight: "30%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  buttonClose: {
    marginTop: "20px"
  },

  channelName: {
    marginBottom: "10px",
    fontWeight: "700",
    fontSize: "16px"
  },

  aboutChannel: {
    marginBottom: "10px"
  },

  textStyle: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default AboutModal;
