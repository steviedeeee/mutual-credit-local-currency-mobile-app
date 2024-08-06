import React, {useRef} from 'react';
import {View} from 'react-native';
import {FormTextEditorProps} from './interface';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import FormLabel from '../FormLabel';

const FormTextEditor: React.FC<FormTextEditorProps> = ({
  name,
  control,
  style,
  rules,
  ...props
}) => {
  const richText = useRef<RichEditor>(null);

  const editorInitializedCallback = () => {};

  return (
    <View style={{marginBottom: 20}}>
      <FormLabel>Description</FormLabel>
      <RichToolbar
        // style={[styles.richBar]}
        editor={richText}
        disabled={false}
        iconTint={'purple'}
        selectedIconTint={'pink'}
        disabledIconTint={'purple'}
        // onPressAddImage={onPressAddImage}
        iconSize={40}
        // actions={[
        //   'insertVideo',
        //   ...defaultActions,
        //   actions.setStrikethrough,
        //   actions.heading1,
        // ]}
        // map icons for self made actions
        // iconMap={{
        //   [actions.heading1]: ({tintColor}) => (
        //     <Text style={[styles.tib, {color: tintColor}]}>H1</Text>
        //   ),
        //   [actions.setStrikethrough]: strikethrough,
        //   ['insertVideo']: video,
        // }}
        // insertVideo={insertVideo}
      />
      <RichEditor
        ref={richText}
        editorInitializedCallback={editorInitializedCallback}
      />
    </View>
  );
};

export default FormTextEditor;
