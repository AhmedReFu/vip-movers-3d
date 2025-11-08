import LanguageCard from '@/components/LanguageCard';
import TopBar from '@/components/TopBar';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SelectLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [searchQuery, setSearchQuery] = useState('');

    const languages = [
        { id: 1, name: 'English', flag: '🇺🇸' },
        { id: 2, name: 'German', flag: '🇩🇪' },
        { id: 3, name: 'Polish', flag: '🇵🇱' },
        { id: 4, name: 'French', flag: '🇫🇷' },
        { id: 5, name: 'Turkish', flag: '🇹🇷' },
    ];

    const filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = () => {
        alert('Selected Language: ' + selectedLanguage);
    
    };

    return (
        <SafeAreaView className="flex-1 bg-primary">

            <View className='flex-1 bg-white px-6'>
                <View className="flex-row items-center justify-start  py-4">
                    <TopBar/>
                    <Text className="text-xl ml-4 font-semibold text-gray-800">
                        Select Language
                    </Text>
                    <View className="w-10" />
                </View>
                <View className="flex-row items-center bg-white border rounded-xl px-4 py-3 mt-8 mb-10">
                    <Ionicons name="search-outline" size={28} color="#9CA3AF" />
                    <TextInput
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholder="Search Language"
                        placeholderTextColor="#9CA3AF"
                        className="flex-1 ml-3 text-xl text-gray-800"
                    />
                </View>
                <ScrollView
                    className="flex-1"
                    showsVerticalScrollIndicator={false}
                >
                    {filteredLanguages.map((language) => (
                        <LanguageCard
                            key={language.id}
                            flag={language.flag}
                            name={language.name}
                            isSelected={selectedLanguage === language.name}
                            onPress={() => setSelectedLanguage(language.name)}
                        />
                    ))}
                </ScrollView>
                <View className=" py-4">
                    <TouchableOpacity
                        onPress={handleSave}
                        className="bg-[#00D2FF] rounded-2xl p-6 items-center justify-center"
                        activeOpacity={0.8}
                    >
                        <Text className="text-white text-lg font-semibold">
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SelectLanguage;