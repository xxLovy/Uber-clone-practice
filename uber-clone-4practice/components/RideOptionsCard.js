import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInfomation } from '../slices/navSlice'

const data = [
    {
        id: '123',
        title: 'Uber X',
        image: "https://links.papareact.com/3pn",
        multiplier: 1,
    },
    {
        id: '456',
        title: 'Uber XL',
        image: "https://links.papareact.com/5w8",
        multiplier: 1.2,
    },
    {
        id: '789',
        title: 'Uber LUX',
        image: "https://links.papareact.com/7pf",
        multiplier: 1.75,
    },
]

const SURGE_CHARGE_RATE = 1.5
const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInfomation = useSelector(selectTravelTimeInfomation)

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
                    onPress={() => navigation.navigate('NavigateCard')}
                >
                    <Icon
                        name="chevron-left"
                        type='fontawesome'
                    />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride - {travelTimeInfomation?.distance?.text}</Text>
            </View>


            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInfomation?.duration?.text}  Travel Time</Text>

                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP'
                            }).format(
                                (travelTimeInfomation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100

                            )}

                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`} disabled={!selected}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})