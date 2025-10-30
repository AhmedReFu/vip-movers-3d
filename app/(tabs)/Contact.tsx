import ContactDetails from '@/components/ContactDetails';
import { images } from '@/constants';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Contact = () => {


  return (

    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#00D2FF" }}>
        <View className=''>
          <View className='bg-white h-full px-6 pt-20'>
            <Text className='text-4xl font-bold my-4'>Contact Details</Text>
            <View className='my-10'>
              <Image source={images.contactHeader} className='h-56 w-full rounded-xl' />
            </View>
            <View className="bg-white rounded-2xl py-4 mt-4">
              <ContactDetails title="Address" description="Golder Avenue, Abuja, USA" />
              <ContactDetails title="Gmail" description="example@gmail.com" />
              <ContactDetails title="Whatsapp" description="+01265 2065115" />
              <ContactDetails title="Telegram" description="+01265 2065115" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Contact;