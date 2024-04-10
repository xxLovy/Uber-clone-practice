import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
    const dispatch = useDispatch()


    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }} />

                <GooglePlacesAutocomplete
                    placeholder='Where from?...'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: 'en',
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        // console.log(JSON.stringify(data, null, 2));
                        // console.log(JSON.stringify(details, null, 2));
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            })
                        )

                        dispatch(setDestination(setDestination(null)))
                    }}
                />


                <NavOptions />
                <NavFavorites />
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
})