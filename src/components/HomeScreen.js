import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const Home = ({ navigation }) => {
  const data = [
    { id: '1', titulo: 'Organizador', image: require('../../imagenes/beehive.png'), option: 'Organizador' },
    { id: '2', titulo: 'Mapa Apicola', image: require('../../imagenes/bee.png'), option: 'Mapa Apicola' },
    { id: '3', titulo: 'Red Social', image: require('../../imagenes/beekeeper.png'), option: 'Red Social' },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleOptionPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOptionPress(item.option)}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={{ fontSize: 22, fontWeight: 'bold', paddingBottom: 20 }}>{item.titulo}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const leftArrow = '\u25C0';
  const rightArrow = '\u25B6';

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../../imagenes/logoBanner.png')} style={styles.bannerImage}
        />
      </View>

      <View style={styles.containerFunctions}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', paddingBottom: '10%' }}> FUNCIONES </Text>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={(event) => {
            const contentOffset = event.nativeEvent.contentOffset.x;
            const viewSize = event.nativeEvent.layoutMeasurement.width;
            const index = Math.floor(contentOffset / viewSize);
            setActiveIndex(index);
          }}
        />
        <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
          <Text style={{ fontSize: 30, color: '#fec75d' }}>{leftArrow}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={{ fontSize: 30, color: '#fec75d' }}>{rightArrow}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  banner: {
    backgroundColor: '#fec75d',
    alignItems: 'center',
    height: 100, // Altura de la cinta amarilla
  },
  bannerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  containerFunctions: {
    alignItems: 'center',
    paddingTop: '10%',
  },
  item: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: width - 100,
    backgroundColor: '#fec75d',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  image: {
    width: '60%',
    height: '60%',
    resizeMode: 'cover',
  },
  prevButton: {
    position: 'absolute',
    top: '60%',
    left: 20,
  },
  nextButton: {
    position: 'absolute',
    top: '60%',
    right: 20,
  },
});

export default Home;
