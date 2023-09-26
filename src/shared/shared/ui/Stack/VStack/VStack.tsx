import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
  const { align = 'start', ref } = props;
  return <Flex {...props} direction='column' align={align} ref={ref} />;
};
