import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, DateData } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const ScheduleShifting = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2025-07-11');
    const [selectedTime, setSelectedTime] = useState<string>('07:00 AM');

    const timeSlots: string[] = [
        '07:00 AM', '08:30 AM', '10:00 AM',
        '11:00 AM', '11:00 PM', '12:00 AM',
    ];

    const onDayPress = (day: DateData) => setSelectedDate(day.dateString);

    const handleProceed = () => {
        // Add your navigation or submission logic here
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Header */}
                <View className="flex-row items-center px-5 py-4 bg-white">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-xl font-semibold text-gray-900">Schedule Shifting</Text>
                </View>

                <View className="px-5 py-4">
                    {/* Calendar Section */}
                    <View className="bg-white rounded-3xl shadow-sm mb-6 overflow-hidden">
                        <Calendar
                            current={selectedDate}
                            onDayPress={onDayPress}
                            markedDates={{
                                [selectedDate]: {
                                    selected: true,
                                    selectedColor: '#06B6D4',
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
                                dayTextColor: '#1F2937',
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
                                padding: 10,
                            }}
                        />
                    </View>

                    {/* Time Picker Section */}
                    <View>
                        <Text className="text-lg font-bold text-gray-900 mb-4">Pick time</Text>
                        <View className="bg-white rounded-3xl p-4 shadow-sm">
                            <View className="flex-row flex-wrap" style={{ gap: 10 }}>
                                {timeSlots.map((time) => (
                                    <TouchableOpacity
                                        key={time}
                                        onPress={() => setSelectedTime(time)}
                                        className={`rounded-2xl py-3.5 px-5 ${selectedTime === time
                                            ? 'bg-cyan-400'
                                            : 'bg-gray-50 border border-gray-200'
                                            }`}
                                        style={{
                                            minWidth: '30%',
                                            flexGrow: 1,
                                            flexBasis: 0,
                                        }}
                                    >
                                        <Text
                                            className={`font-semibold text-center ${selectedTime === time ? 'text-white' : 'text-gray-700'
                                                }`}
                                        >
                                            {time}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>

                    {/* Selected Info Card */}
                    <View className="mt-6 bg-cyan-50 rounded-2xl p-4 border border-cyan-100">
                        <Text className="text-sm font-semibold text-cyan-900 mb-2">
                            Selected Schedule
                        </Text>
                        <View className="flex-row items-center">
                            <Ionicons name="calendar-outline" size={18} color="#06B6D4" />
                            <Text className="text-gray-700 ml-2 flex-1">
                                {new Date(selectedDate).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </Text>
                        </View>
                        <View className="flex-row items-center mt-2">
                            <Ionicons name="time-outline" size={18} color="#06B6D4" />
                            <Text className="text-gray-700 ml-2">{selectedTime}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Fixed Bottom Button */}
            <View className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-white border-t border-gray-100">
                <TouchableOpacity
                    onPress={handleProceed}
                    className="bg-cyan-400 rounded-xl py-4 items-center active:bg-cyan-500"
                >
                    <Text className="text-white text-lg font-semibold">Proceed</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ScheduleShifting;