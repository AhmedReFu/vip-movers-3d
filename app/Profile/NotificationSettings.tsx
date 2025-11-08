import NotificationItem from "@/components/NotificationItem";
import TopBar from "@/components/TopBar";
import { NotificationKey, NotificationSettingsType } from "@/type-d";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





const NotificationSettings = () => {
    const [notifications, setNotifications] = useState<NotificationSettingsType>({
        general: false,
        sound: false,
        vibrate: false,
        messages: false,
        updates: false,
        offers: false,
        reminders: false,
        email: false,
    });
    const toggleNotification = (key: NotificationKey) => {
        setNotifications((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const toggleAllNotifications = (value: boolean) => {
        const allNotifications = Object.keys(notifications).reduce(
            (acc, key) => {
                acc[key as NotificationKey] = value;
                return acc;
            },
            {} as NotificationSettingsType
        );
        setNotifications(allNotifications);
    };

    const allEnabled = Object.values(notifications).every((value) => value);

    const handleSave = () => {
        console.log("Notification Settings:", notifications);
        router.back();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
            <View className="flex-1 bg-white">
                <View className="flex-row items-center justify-start px-6 py-4 border-b border-gray-100">
                    <TopBar/>
                    <Text className="text-xl font-semibold ml-5 text-gray-800">
                        Notification Settings
                    </Text>
                    <View className="w-6" />
                </View>

                <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                    <View className="px-6 py-6 bg-cyan-50">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center flex-1">
                                <View className="w-16 h-16 rounded-full bg-[#00D2FF] items-center justify-center mr-4">
                                    <Ionicons name="notifications" size={32} color="white" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-bold text-gray-900 mb-1">
                                        All Notifications
                                    </Text>
                                    <Text className="text-sm text-gray-600">
                                        {allEnabled ? "All enabled" : "Some enabled"}
                                    </Text>
                                </View>
                            </View>
                            <Switch
                                value={allEnabled}
                                onValueChange={toggleAllNotifications}
                                trackColor={{ false: "#D1D5DB", true: "#00D2FF" }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    <View className="px-6 py-4">
                        <Text className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            General Settings
                        </Text>
                        <NotificationItem
                            icon="notifications-outline"
                            title="Push Notifications"
                            description="Enable all push notifications"
                            value={notifications.general}
                            onValueChange={() => toggleNotification("general")}
                        />
                        <NotificationItem
                            icon="volume-high-outline"
                            title="Sound"
                            description="Play sound for notifications"
                            value={notifications.sound}
                            onValueChange={() => toggleNotification("sound")}
                        />
                        <NotificationItem
                            icon="phone-portrait-outline"
                            title="Vibrate"
                            description="Vibrate on new notifications"
                            value={notifications.vibrate}
                            onValueChange={() => toggleNotification("vibrate")}
                        />
                    </View>
                    <View className="px-6 py-4">
                        <Text className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            Notification Types
                        </Text>
                        <NotificationItem
                            icon="chatbubble-outline"
                            title="Messages"
                            description="New messages and chats"
                            value={notifications.messages}
                            onValueChange={() => toggleNotification("messages")}
                        />
                        <NotificationItem
                            icon="refresh-outline"
                            title="App Updates"
                            description="Get notified about new features"
                            value={notifications.updates}
                            onValueChange={() => toggleNotification("updates")}
                        />
                        <NotificationItem
                            icon="pricetag-outline"
                            title="Offers & Promotions"
                            description="Special deals and discounts"
                            value={notifications.offers}
                            onValueChange={() => toggleNotification("offers")}
                        />
                        <NotificationItem
                            icon="time-outline"
                            title="Reminders"
                            description="Scheduled reminders"
                            value={notifications.reminders}
                            onValueChange={() => toggleNotification("reminders")}
                        />
                        <NotificationItem
                            icon="mail-outline"
                            title="Email Notifications"
                            description="Receive notifications via email"
                            value={notifications.email}
                            onValueChange={() => toggleNotification("email")}
                        />
                    </View>
                </ScrollView>
                <View className="px-6 py-4 border-t border-gray-100">
                    <TouchableOpacity
                        onPress={handleSave}
                        className="w-full p-6 bg-[#00D2FF] rounded-2xl items-center justify-center"
                        activeOpacity={0.8}
                    >
                        <Text className="text-white text-base font-semibold">
                            Save Settings
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NotificationSettings;
