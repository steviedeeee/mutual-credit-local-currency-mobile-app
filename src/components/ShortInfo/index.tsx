import React from 'react';
import {ShortInfoProps} from './interface';
import {Text} from 'react-native';

const ShortInfo: React.FC<ShortInfoProps> = ({data, limit = 2, infoTitle}) => {
  const total = data.length;

  const strings = [];

  for (var i = 0; i < total; i++) {
    strings.push(data[i]);

    if (i + 1 >= limit) {
      break;
    }
  }

  const rest = total - strings.length;

  return (
    <Text>
      {strings.join(', ')}
      {/*rest > 0 && (
        <>
          {", "}
          <Popover>
            <PopoverTrigger>
              <Box
                as="span"
                cursor="pointer"
                color="#1A446F"
              >{`+${rest} lainnya`}</Box>
            </PopoverTrigger>
            <PopoverContent bgColor="#1A446F" color="#fff" w="240px">
              <PopoverArrow bgColor="#1A446F" />
              <PopoverCloseButton />
              <PopoverHeader>{infoTitle}</PopoverHeader>
              <PopoverBody pr="32px" fontSize="0.9rem" lineHeight={1.4}>
                <UnorderedList>
                  {data.map((text, index) => (
                    <ListItem key={index}>{text}</ListItem>
                  ))}
                </UnorderedList>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </>
                  )*/}
    </Text>
  );
};

export default ShortInfo;
