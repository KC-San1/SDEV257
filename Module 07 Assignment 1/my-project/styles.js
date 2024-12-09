import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
  },

  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 400,
    height: 40,
  },

  swipeItem: {
    height: 40,
    width: 400,
    backgroundColor: "azure",
    justifyContent: "center",
    borderColor: "slategrey",
    margin: 5,
    padding: 5,
  },

  swipeItemText: {
    textAlign: "center",
    color: "slategrey",
  },

  swipeBlank: {
    width: 200,
    height: 30,
  },
  
  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center",
  },

  filter: {
    height: 40,
    width: 200,
  },

  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
});
