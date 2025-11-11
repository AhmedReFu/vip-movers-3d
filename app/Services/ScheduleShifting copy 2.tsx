import TopBar from '@/components/TopBar';
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

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
        router.navigate('/Services/Location')
    };

    return (
        <>
            <StatusBar style='dark' />
            <View className="flex-1 bg-gray-50 px-6 py-4 pt-12">
                <View className='flex-row items-start'>
                    <TopBar className='mb-6' />
                    <View className='ml-6'>
                        <Text className='text-2xl font-bold'>Schedule Shifting</Text>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 0 }}
                >
                    <View className=" py-2">
                        <View className="bg-white rounded-3xl shadow-sm mb-2 overflow-hidden">
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
                                <View className="bg-white rounded-3xl p-2 my-2">
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

                <View className=" py-4 ">
                <TouchableOpacity
                        onPress={handleProceed}
                    className="bg-primary rounded-xl py-6 items-center "
                >
                    <Text className="text-white text-xl font-bold">Proceed</Text>
                </TouchableOpacity>
            </View>
            </View>
        </>
    );
};

export default ScheduleShifting;