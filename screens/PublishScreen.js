import React from 'react';
import {
  ButtonOutline,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PublishScreen = props => {
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <View style={styles.ViewU6} pointerEvents={'auto'}>
        <TextInput
          onChangeText={textInputValue => {
            try {
              setTextInputValue(textInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[styles.TextInputlz, { borderColor: theme.colors.divider }]}
          placeholder={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
          multiline={true}
          numberOfLines={4}
          value={textInputValue}
        />
        <View style={styles.ViewgJ} pointerEvents={'auto'}>
          <View style={styles.Viewka} pointerEvents={'auto'}>
            <View
              style={[
                styles.Viewyt,
                {
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 18,
                  borderColor: theme.colors.divider,
                },
              ]}
              pointerEvents={'auto'}
            >
              <Text
                style={[styles.Text_8H, { color: theme.colors.background }]}
              >
                {'好的'}
              </Text>
            </View>

            <View
              style={[
                styles.ViewtX,
                {
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 18,
                  borderColor: theme.colors.divider,
                },
              ]}
              pointerEvents={'auto'}
            >
              <Text style={[styles.TextyB, { color: theme.colors.background }]}>
                {'好的'}
              </Text>
            </View>
            <IconButton
              style={styles.IconButtonvG}
              icon={'AntDesign/pluscircle'}
              size={18}
            />
          </View>
          <ButtonOutline
            style={[
              styles.ButtonOutline_5o,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              },
            ]}
            title={'提交'}
            loading={false}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextInputlz: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    minHeight: 200,
  },
  Text_8H: {
    fontSize: 2,
    textAlign: 'center',
  },
  Viewyt: {
    width: 40,
    height: 18,
    alignItems: 'center',
    marginRight: 2,
  },
  TextyB: {
    fontSize: 2,
    textAlign: 'center',
  },
  ViewtX: {
    width: 40,
    height: 18,
    alignItems: 'center',
  },
  IconButtonvG: {
    marginLeft: 2,
  },
  Viewka: {
    paddingBottom: 10,
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginRight: 2,
  },
  ButtonOutline_5o: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ViewgJ: {
    marginTop: 10,
  },
  ViewU6: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});

export default withTheme(PublishScreen);
