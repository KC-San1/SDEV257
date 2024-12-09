import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import styles from "./styles";
import ListControls from "./ListControls";
import Swipeable from "./Swipeable";

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
          <Text style={styles.itemTitle}>
            {selectedItem ? selectedItem.value : ""}
          </Text>
          {selectedItem ? (
            <View style={styles.details}>
              <Text>Name: {"selectedItem.details.name"}</Text>
              <Text>Height: {"selectedItem.details.height"} cm</Text>
              <Text>Mass: {"selectedItem.details.mass"} kg</Text>
              <Text>Hair Color: {"selectedItem.details.hair_color"}</Text>
              <Text>Skin Color: {"selectedItem.details.skin_color"}</Text>
              <Text>Eye Color: {"selectedItem.details.eye_color"}</Text>
              <Text>Birth Year: {"selectedItem.details.birth_year"}</Text>
              <Text>Gender: {"selectedItem.details.gender"}</Text>
            </View>
          ) : null}
        </View>
      </Modal>
    </View>
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      details: PropTypes.object.isRequired,
    })
  ).isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};
