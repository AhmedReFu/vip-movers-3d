import { TabBarIconProps } from '@/type-d';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import cn from "clsx";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
    <View className="items-center justify-center gap-2 w-96">
        {icon}
        <Text className={cn(
            'text-md font-medium',
            focused ? 'text-[#00D2FF]' : 'text-gray-400'
        )}>
            {title}
        </Text>
    </View>
);

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#00D2FF',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                    height: 100,
                    position: 'absolute',
                    backgroundColor: 'white',
                    shadowColor: '#00D2FF',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    elevation: 10,
                    paddingTop: 20,
                    paddingBottom: 20,
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            title="Home"
                            icon={
                                <Feather
                                    name="home"
                                    size={30}
                                    color={focused ? '#00D2FF' : '#9CA3AF'}
                                />
                            }
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Bookings'
                options={{
                    title: 'Bookings',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            title="Bookings"
                            icon={
                                <Octicons
                                name="note"
                                    size={30}
                                color={focused ? '#00D2FF' : '#9CA3AF'}
                            />
                            }
                        />
                        
                    )
                }}
            />
            <Tabs.Screen
                name='Contact'
                options={{
                    title: 'Contact',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            title="Contact"
                            icon={
                                <MaterialCommunityIcons
                                name="message-processing-outline"
                                    size={30}
                                color={focused ? '#00D2FF' : '#9CA3AF'}
                            />
                            }
                        />
                       
                    )
                }}
            />
            <Tabs.Screen
                name='Profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        
                        <TabBarIcon
                            focused={focused}
                            title="Profile"
                        
                            icon={
                                 <Ionicons
                                name="person-outline"
                                    size={30}
                                color={focused ? '#00D2FF' : '#9CA3AF'}
                            />
                            }
                        />
                        
                    )
                }}
            />
        </Tabs>
    );
}