import { Ionicons } from "@expo/vector-icons";
import { Switch, Text, View } from "react-native";

const NotificationItem = ({
    icon,
    title,
    description,
    value,
    onValueChange,
}: {
    icon: any;
    title: string;
    description: string;
    value: boolean;
    onValueChange: () => void;
}) => {
    return (
        <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
            <View className="flex-row items-center flex-1">
                <View className="w-12 h-12 rounded-full bg-cyan-100 items-center justify-center mr-4">
                    <Ionicons name={icon} size={24} color="#00D2FF" />
                </View>
                <View className="flex-1 pr-4">
                    <Text className="text-base font-semibold text-gray-900 mb-1">
                        {title}
                    </Text>
                    <Text className="text-sm text-gray-600">{description}</Text>
                </View>
            </View>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: "#D1D5DB", true: "#00D2FF" }}
                thumbColor="white"
            />
        </View>
    );
};

export default NotificationItem;