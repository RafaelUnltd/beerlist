import React from 'react'
import { ScrollView } from 'react-native'

import AppBar from '../components/app-bar'
import StyleAttribute from '../components/style-attribute'
import SingleStyleProvider from '../provider/SingleStyleProvider'
import Column from '../components/layout-components/Column'
import Row from '../components/layout-components/Row'
import ScreenWrapper from '../components/screen-wrapper'

const BrewListView = props => (
  <ScreenWrapper>
    <SingleStyleProvider id={props.styleId}>
      {(isFetching, data) => !isFetching && (
        <React.Fragment>
          <AppBar
            icon='arrow-back'
            title={data && (data.shortName || data.name)}
            actionButtonPress={props.pop}
          />
          <ScrollView>
            <Column
              paddingLeft={15}
              paddingRight={15}
              paddingTop={30}
            >
              <StyleAttribute
                title='Full name'
                description={data.name || 'Not defined yet'}
              />
              <StyleAttribute
                title='Short name'
                description={data.shortName || 'Not defined yet'}
              />
              <StyleAttribute
                title='Description'
                description={data.description || 'Not defined yet'}
              />
              <StyleAttribute
                title='Category'
                description={(data.category && data.category.name) || 'Not defined yet'}
              />
              <Row>
                <StyleAttribute
                  title='ABV min.'
                  description={data.abvMin || 'Not defined yet'}
                  row
                />
                <StyleAttribute
                  title='ABV max.'
                  description={data.abvMax || 'Not defined yet'}
                  row
                />
              </Row>
            </Column>
          </ScrollView>
        </React.Fragment>
      )}
    </SingleStyleProvider>
  </ScreenWrapper>
)

export default BrewListView
