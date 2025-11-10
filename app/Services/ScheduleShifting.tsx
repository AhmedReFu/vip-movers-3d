import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, DateData } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ScheduleShifting = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2025-11-11');
    const [selectedTime, setSelectedTime] = useState<string>('07:00 AM');

    const timeSlots: string[] = [
        '07:00 AM', '08:30 AM', '10:00 AM',
        '11:00 PM', '12:30 AM', '11:00 AM',
        '12:00 AM', '12:00 PM', '09:00 AM',
    ];

    const onDayPress = (day: DateData) => setSelectedDate(day.dateString);

    const handleProceed = () => {
        // Add your navigation or submission logic here
        alert(`Selected Date: ${selectedDate}  Selected Time: ${selectedTime}`);
        router.navigate("/Services/Location")
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <StatusBar style='dark' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 0 }}
            >

                <View className="flex-row items-center px-5 py-4 ">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-900">Schedule Shifting</Text>
                </View>
                <View className="px-5 py-4">
                    <View className="bg-white rounded-3xl shadow-sm mb-6 overflow-hidden">
                        <Calendar

                            current={selectedDate}
                            onDayPress={onDayPress}
                            markedDates={{
                                [selectedDate]: {
                                    selected: true,
                                    selectedColor: '#20DFFF',
                                    selectedTextColor: 'white'
                                },
                            }}
                            theme={{
                                backgroundColor: 'white',
                                calendarBackground: 'white',
                                textSectionTitleColor: '#6B7280',
                                selectedDayBackgroundColor: '#06B6D4',
                                selectedDayTextColor: 'white',
                                todayTextColor: '#06B6D4',
                                dayTextColor: '#F20DFFF',
                                textDisabledColor: '#D1D5DB',
                                monthTextColor: '#1F2937',
                                indicatorColor: '#06B6D4',
                                textDayFontFamily: 'System',
                                textMonthFontFamily: 'System',
                                textDayHeaderFontFamily: 'System',
                                textDayFontWeight: '400',
                                textMonthFontWeight: '600',
                                textDayHeaderFontWeight: '600',
                                textDayFontSize: 18,
                                textMonthFontSize: 18,
                                textDayHeaderFontSize: 18,
                                arrowColor: '#1F2937',
                            }}
                            style={{
                                borderRadius: 24,
                                padding: 15,
                            }}
                        />

                        <View>
                            <Text className="text-xl font-bold text-gray-900 p-2">Pick time</Text>
                            <View className="bg-white rounded-3xl p-4 my-4">
                                <View className="flex-row flex-wrap" style={{ gap: 10 }}>
                                    {timeSlots.map((time, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => setSelectedTime(time)}
                                            className={`rounded-3xl my-2 py-4 px-5 ${selectedTime === time
                                                ? 'bg-primary'
                                                : 'bg-gray-50 border border-gray-200'
                                                }`}
                                            style={{
                                                minWidth: '30%',
                                                flexGrow: 1,
                                                flexBasis: 0,
                                            }}
                                        >
                                            <Text
                                                className={`font-bold text-center ${selectedTime === time ? 'text-white' : 'text-gray-700'
                                                    }`}
                                            >
                                                {time}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>

            <View className=" px-5 py-4 ">
                <TouchableOpacity
                    onPress={() => { router.navigate('/Services/LocationScreen') }}
                    className="bg-primary rounded-xl py-6 items-center "
                >
                    <Text className="text-white text-xl font-bold">Proceed</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ScheduleShifting;