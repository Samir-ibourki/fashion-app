import { Stack } from "expo-router";

export default function Layout(){
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}  />
      <Stack.Screen name="/logIn" options={{ headerShown: false }}  />
       <Stack.Screen name="/signUp" options={{ headerShown: false }}  />
       <Stack.Screen
        name="products/index"
        options={{ title: "Products", headerShown: false }}
      />
    </Stack>
  );
};
