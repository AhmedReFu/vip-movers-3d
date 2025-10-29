import React from 'react';
import { Text, View } from 'react-native';

type InfoRowProps = {
  title?: string;
  description?: string;
};

const ContactDetails = ({ title, description }: InfoRowProps) => {
  return (
<View className="flex-row py-3  ">
    <Text className="text-gray-700 text-xl font-semibold w-28">
      {title}
    </Text>
    <Text className="text-gray-500 text-xl font-semibold mx-2">:</Text>
    <Text className="text-gray-800 text-xl flex-1">
      {description}
    </Text>
  </View>
  )
}

export default ContactDetails