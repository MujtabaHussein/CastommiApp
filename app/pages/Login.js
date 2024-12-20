import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import { useNavigation } from 'expo-router'
import CustomTextInput from '../components/CustomTextInput'

export default function Login() {
  const navigation = useNavigation()
  return (
    <View className='flex-1 items-center'>
      <StatusBar barStyle={'dark-content'} />
      <Image
        source={require('../../assets/images/Logo-Type.png')}
        className='mt-32 mb-12'
      />
      <Text className='text-neutral-600 text-2xl font-semibold mb-16'>
        ورود | ثبت نام
      </Text>

      {/* Form */}
      <View className='flex items-center'>
        {/* Username */}
        <CustomTextInput text={'نام کاربری'} />
        {/* Password */}
        <CustomTextInput text={'رمز عبور'} />
        <Text className='mt-12 font-bold '>
          ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.
        </Text>

        {/* Buttons */}
        <View
          style={{ width: wp(80), marginTop: hp(5) }}
          className='flex gap-4 pb-8'
        >
          <TouchableOpacity className='bg-[#A72F3B]  rounded-lg py-4 '>
            <Text className='text-center font-bold text-neutral-50 text-lg'>
              ورود به سایت
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='border border-neutral-800  rounded-lg py-4 '>
            <Text className='text-center font-bold text-neutral-800 text-lg'>
              ورود با حساب گوگل
            </Text>
          </TouchableOpacity>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate('UserType')
          }}
        >
          <Text className='text-[#A72F3B] font-bold text-lg'>
            ثبت نام در سایت
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
