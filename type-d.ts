import { ImageSourcePropType } from "react-native";

export type onBoarding = {
  buttonName: string;
  title: string;
  description: string;
  routeName: any;
  images: ImageSourcePropType;
};

export interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export interface CustomButtonProps {
  onPress?: () => void;
  title?: string;
  style?: string;
  leftIcon?: React.ReactNode;
  textStyle?: string;
  isLoading?: boolean;
}

export interface TabBarIconProps {
  focused: boolean;
  icon: React.ReactNode;
  title: string;
}

export type BookingStatus = "active" | "completed" | "cancelled";

export interface LanguageCardProps {
  flag: string;
  name: string;
  isSelected: boolean;
  onPress: () => void;
}

export type NotificationSettingsType = {
  general: boolean;
  sound: boolean;
  vibrate: boolean;
  messages: boolean;
  updates: boolean;
  offers: boolean;
  reminders: boolean;
  email: boolean;
};

export type NotificationKey = keyof NotificationSettingsType;