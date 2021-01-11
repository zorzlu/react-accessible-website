import React from 'react';
import { Tag } from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ListTagsInCard({ tags }) {
  function strConv(textConvertToString) {
    return textConvertToString.toString().toLowerCase().replace(' ', '-');
  }

  const lista = tags.map((tag) => (
    <WrapItem key={strConv(tag)}>
      <Tag
        colorScheme="gray"
        fontWeight="bold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
      >
        {tag}
      </Tag>
    </WrapItem>
  ));
  return <Wrap>{lista}</Wrap>;
}

ListTagsInCard.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default ListTagsInCard;
