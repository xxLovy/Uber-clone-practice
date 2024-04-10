1. use `SafeAreaView` instead `View` to prevent from notch
2. resizeMode?
3. React Native Elements library
4. React Native navigation

Use Navigator

```jsx
          <Stack.Navigator>
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
```

Use useNavigation Hook

```jsx
    const navigation = useNavigation()
    
    return (
      ...
        onPress={() => navigation.navigate(item.screen)}
    ...
    )

```

美化输出json

```js
console.log(JSON.stringify(data, null, 2));
console.log(JSON.stringify(details, null, 2));
```

5. KeyAvoidingView

```jsx
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>
```

6. setSelected

```jsx
const [selected, setSelected] = useState(null)
...
style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}
```

7. calculate the matrix distance between A and B

