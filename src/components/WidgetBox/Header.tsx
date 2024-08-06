import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WidgetBoxHeaderProps} from './interface';

const WidgetBoxHeader: React.FC<WidgetBoxHeaderProps> = ({
  title,
  description,
  labelButton,
  style,
  onClickLabelButton = () => {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        {description && (
          <Text
            style={{
              color: '#444',
              fontSize: 13,
            }}>
            {description}
          </Text>
        )}
      </View>
      {labelButton && (
        <TouchableOpacity onPress={onClickLabelButton}>
          <Text style={styles.labelButton}>{labelButton}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 20,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  labelButton: {
    color: 'rgb(230, 36, 114)',
    fontWeight: '600',
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 13,
  },
});

export default WidgetBoxHeader;
