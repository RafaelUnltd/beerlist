import React from 'react'
import { ScrollView, FlatList } from 'react-native'

import StylesListProvider from '../../provider/StylesListProvider'
import StyleListItem from './StyleListItem'
import StyleListEmpty from './StyleListEmpty'

const StyleList = (props) => (
  <ScrollView>
    <StylesListProvider>
      {(isFetching, data) => (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <StyleListItem
              title={item.shortName || item.name}
              description={item.description}
              onPress={props.navigateToDetail(item.id)}
            />
          )}
          ListEmptyComponent={
            <StyleListEmpty isFetching={isFetching} />
          }
        />
      )}
    </StylesListProvider>
  </ScrollView>
)

export default StyleList
