import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Text
} from "react-native";
import AboutModal from "../Components/AboutModal";
import { fetchDetails } from "../Screens/Services/action";
import { connect } from "react-redux";
import React from "react";

const Channels = (props) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const { fetchDetails, results, channelInfo } = props;

  const handlePress = (id) => {
    let channelDetails =
      channelInfo &&
      channelInfo.find((item) => {
        if (item.meta.id === id) {
          return true;
        }
        return false;
      });

    setChannelDetails(channelDetails);
    setModalVisible(true);
  };

  useEffect(() => {
    console.log(channelInfo);
    if (channelInfo && channelInfo.length) {
      setTimeout(() => {
        setIsDataLoaded(true);
        setChannelDetails(channelInfo[0]);
        setModalVisible(true);
      }, 3000);
    }
  }, [channelInfo]);

  useEffect(() => {
    console.log(channelDetails);
  }, [channelDetails]);

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View style={{ height: "100%" }}>
      {!isDataLoaded ? (
        <View style={styles.loader}>
          {" "}
          <ActivityIndicator
            size="large"
            styles={{ alignSelf: "center" }}
          />{" "}
        </View>
      ) : (
        <>
          <View>
            <Text
              style={{
                fontSize: "18px",
                marginTop: "20px",
                fontWeight: "700",
                marginHorizontal: "auto"
              }}
            >
              CHANNEL LIST
            </Text>
          </View>
          <AboutModal
            channelDetails={channelDetails}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <FlatList
            data={channelInfo}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => handlePress(item.meta.id)}
                    style={styles.container}
                  >
                    <View>{item.meta.title}</View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  channelInfo: state.channelInfo
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: () => dispatch(fetchDetails())
});

const styles = StyleSheet.create({
  container: {
    marginLeft: "40px",
    margin: "10px",
    height: 30
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Channels);
