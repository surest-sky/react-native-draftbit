import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ListScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View pointerEvents={'auto'} />
      <View style={styles.ViewAe}>
        <ExampleDataApi.FetchListOfArticlesGET limit={10}>
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={fetchData}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles.Views8}>
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ArticleViewScreen', {
                              articleId: listData?.id,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles.Viewpw}>
                          <Image
                            style={styles.ImageFJ}
                            resizeMode={'cover'}
                            source={{ uri: `${item && item['img_src']}` }}
                          />
                          <View style={styles.Viewyf}>
                            <Text
                              style={[
                                theme.typography.caption,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {listData?.date}
                            </Text>

                            <Text
                              style={[
                                theme.typography.custom25,
                                { color: theme.colors.strong },
                              ]}
                              numberOfLines={2}
                            >
                              {listData?.title}
                            </Text>
                          </View>
                        </View>
                      </Touchable>
                    </View>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </ExampleDataApi.FetchListOfArticlesGET>
      </View>
      <View pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageFJ: {
    width: 125,
    height: 75,
  },
  Viewyf: {
    paddingLeft: 6,
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    marginTop: 6,
  },
  Viewpw: {
    flexDirection: 'row',
  },
  Views8: {
    left: 2,
  },
  ViewAe: {
    width: '100%',
  },
});

export default withTheme(ListScreen);
