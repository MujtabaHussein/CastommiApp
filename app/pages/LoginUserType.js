import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'

export default function LoginUserType() {
  const [isChecked, setIsChecked] = useState('')
  const handleIsChecked = () => {}
  return (
    <View className='flex justify-center items-center gap-8 mt-24 '>
      <Text>
        برای ثبت نام در کاستومی، نقش خود را در همکاری با ما مشخص کنید.
      </Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/Designer.png')}
          style={[isChecked === 'second' && { tintColor: 'gray' }]}
        />
        <View className='flex flex-row items-center justify-center'>
          <Text>طراح هستم</Text>
          <RadioButton
            value='first'
            status={isChecked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked('first')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/Customer.png')}
          style={[isChecked === 'first' && { tintColor: 'gray' }]}
        />
        <View className='flex flex-row items-center justify-center'>
          <Text>مشتری هستم</Text>

          <RadioButton
            value='first'
            status={isChecked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked('second')}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
