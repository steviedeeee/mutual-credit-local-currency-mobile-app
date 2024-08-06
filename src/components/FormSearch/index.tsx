import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CloseIcon, LoupeIcon} from '../Icons';
import {FormSearchFakeProps, FormSearchProps} from './interface';

const FormSearch: React.FC<FormSearchProps> = ({
  placeholder,
  isLoading,
  onChangeText,
  onSubmit,
  withSearchButton,
  style,
  isFocus,
  onClear,
  isSmall,
}) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isFocus) {
      setTimeout(() => {
        inputRef.current?.focus();
      });
    }
  }, [inputRef, isFocus]);

  const [localText, setLocalText] = useState('');

  const onChangeTextLocal = (text: string) => {
    setLocalText(text);
    if (onChangeText) onChangeText(text);
  };

  const clearText = () => {
    setLocalText('');
    if (onClear) onClear();
  };

  return (
    <View style={[styles.container, style]}>
      {isLoading ? <ActivityIndicator size={16} /> : <LoupeIcon size={16} />}
      <TextInput
        style={[styles.input, {height: isSmall ? 40 : 50}]}
        placeholder={placeholder}
        onChangeText={onChangeTextLocal}
        value={localText}
        ref={inputRef}
        returnKeyType={withSearchButton ? 'search' : 'done'}
        onSubmitEditing={({nativeEvent: {text}}) => {
          if (onSubmit) onSubmit(text);
        }}
      />
      {localText.length >= 1 && (
        <TouchableOpacity onPress={clearText}>
          <CloseIcon size={20} fill="#333" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const FormSearchFake: React.FC<FormSearchFakeProps> = ({
  placeholder,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <LoupeIcon size={16} />
      <View style={styles.fakeLabel}>
        <Text style={{fontSize: 14}}>{placeholder}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dedede',
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    gap: 12,
  },
  input: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#000',
    flex: 1,
    fontSize: 13,
  },
  fakeLabel: {
    color: '#000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
  },
});

export default FormSearch;
