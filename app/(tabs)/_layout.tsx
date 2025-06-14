import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";


export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Connect",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "wallet" : "wallet-outline"}
							color={color}
						/>
					),
				}}
			/>
			{/* <Tabs.Screen
    name="generate-qr"
    options={{
        title: "Generate QR",
        tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
                name={focused ? "qr-code" : "qr-code-outline"}
                color={color}
            />
        ),
    }} */}
{/* /> */}
<Tabs.Screen
    name="scan-qr"
    options={{
        title: "Scan QR",
        tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
                name={focused ? "scan" : "scan-outline"}
                color={color}
            />
        ),
    }}
/>
			<Tabs.Screen
				name="read"
				options={{
					title: "Read",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "reader" : "reader-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="write"
				options={{
					title: "Write",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "code-slash" : "code-slash-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="buy"
				options={{
					title: "Buy",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "cart" : "cart-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
