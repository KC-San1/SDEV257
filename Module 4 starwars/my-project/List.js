import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import styles from "./styles";
import ListControls from "./ListControls";
import Swipeable from "./Swipeable"; // Import the custom Swipeable component

export default function List({ Controls, data, onFilter, onSort, asc }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSwipe = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <Swipeable name={item.value} onSwipe={() => handleSwipe(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.item}>
          <Text style={styles.item}>
            {selectedItem ? selectedItem.value : ""}
          </Text>
        </View>
      </Modal>
    </View>
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};

