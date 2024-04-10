import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'

const data = [
    {
        id: '123',
        icon: 'home',
        location: "Home",
        destination: "Code Street, London, UK"
    },
    {
        id: '456',
        icon: 'home',
        location: "Work",
        destination: "London Eye, London, UK"
    },
]
const NavFavorites = () => {

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={[tw`bg-gray-200 `, { height: 0.5 }]}
                />
            )}
            renderItem={({ item: { location, destination, icon } }) => {
                return (
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                            name={icon}
                            type="Ionicons"
                            color="white"
                            size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{location}</Text>
                            <Text style={tw`text-gray-500`}>{destination}</Text>
                        </View>
                    </TouchableOpacity>

                )
            }}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})