import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ text, color, background }) {
  return (
    <TouchableOpacity className={`rounded-lg py-4 ${background}`}>
      <Text className={`text-center font-bold text-lg ${color}`}>{text}</Text>
    </TouchableOpacity>
  )
}
