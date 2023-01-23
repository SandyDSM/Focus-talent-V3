import { Flex, Heading, SearchField, Card, View } from '@aws-amplify/ui-react'
import React from 'react'
import CardsUsers from '../containers/CardsUsers'

const Search = () => {
  return (
    <View>
      <Card>
      <Flex direction={{ base: 'column', medium: 'row' }} justifyContent={{base:"flex-start", medium:"space-between"}} alignItems="center" >
        <Heading level={4}> Mi equipo</Heading>
        <SearchField label="buscarColaborador" placeholder="Buscar colaborador" labelHidden={true}/>
      </Flex>
      </Card>
    </View>
  )
}

export default Search